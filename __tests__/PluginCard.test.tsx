import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PluginCard, { PluginData } from '../app/components/PluginCard';

describe('PluginCard Component', () => {
  const mockPlugin: PluginData = {
    id: 1,
    name: 'Test Plugin',
    version: '1.0.0',
    description: 'A test plugin for audio processing',
    category: 'effect',
    download_count: 1500,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  };

  describe('Rendering', () => {
    it('should render plugin name', () => {
      render(<PluginCard plugin={mockPlugin} />);
      expect(screen.getByText('Test Plugin')).toBeInTheDocument();
    });

    it('should render plugin description', () => {
      render(<PluginCard plugin={mockPlugin} />);
      expect(screen.getByText('A test plugin for audio processing')).toBeInTheDocument();
    });

    it('should render plugin version', () => {
      render(<PluginCard plugin={mockPlugin} />);
      expect(screen.getByText('v1.0.0')).toBeInTheDocument();
    });

    it('should render download count', () => {
      render(<PluginCard plugin={mockPlugin} />);
      expect(screen.getByText('1,500')).toBeInTheDocument();
    });

    it('should render category badge', () => {
      render(<PluginCard plugin={mockPlugin} />);
      expect(screen.getByText('effect')).toBeInTheDocument();
    });

    it('should render download button', () => {
      render(<PluginCard plugin={mockPlugin} />);
      expect(screen.getByRole('button', { name: /download/i })).toBeInTheDocument();
    });

    it('should truncate long descriptions', () => {
      const longDescPlugin: PluginData = {
        ...mockPlugin,
        description: 'This is a very long description that should be truncated to two lines and show an ellipsis to indicate there is more content that is not being displayed to the user.',
      };
      render(<PluginCard plugin={longDescPlugin} />);
      const description = screen.getByText(/This is a very long description/);
      expect(description).toHaveClass('line-clamp-2');
    });

    it('should display default description when description is empty', () => {
      const noDescPlugin: PluginData = {
        ...mockPlugin,
        description: '',
      };
      render(<PluginCard plugin={noDescPlugin} />);
      expect(screen.getByText('No description available')).toBeInTheDocument();
    });
  });

  describe('Download Button', () => {
    it('should call onDownload when button is clicked', async () => {
      const mockOnDownload = vi.fn();
      const user = userEvent.setup();

      render(<PluginCard plugin={mockPlugin} onDownload={mockOnDownload} />);

      const downloadButton = screen.getByRole('button', { name: /download/i });
      await user.click(downloadButton);

      expect(mockOnDownload).toHaveBeenCalledTimes(1);
      expect(mockOnDownload).toHaveBeenCalledWith(mockPlugin);
    });

    it('should not call onDownload when button is disabled', async () => {
      const mockOnDownload = vi.fn();
      const user = userEvent.setup();

      render(<PluginCard plugin={mockPlugin} onDownload={mockOnDownload} downloading={true} />);

      const downloadButton = screen.getByRole('button', { name: /downloading/i });
      await user.click(downloadButton);

      expect(mockOnDownload).not.toHaveBeenCalled();
    });

    it('should show downloading state when downloading prop is true', () => {
      render(<PluginCard plugin={mockPlugin} downloading={true} />);

      expect(screen.getByRole('button', { name: /downloading\.\.\./i })).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveClass('opacity-50');
      expect(screen.getByRole('button')).toHaveClass('cursor-not-allowed');
    });

    it('should show spinner when downloading', () => {
      render(<PluginCard plugin={mockPlugin} downloading={true} />);

      const spinner = screen.getByRole('button').querySelector('svg.animate-spin');
      expect(spinner).toBeInTheDocument();
    });
  });

  describe('Category Badges', () => {
    it('should display correct gradient for amp category', () => {
      const ampPlugin: PluginData = { ...mockPlugin, category: 'amp' };
      render(<PluginCard plugin={ampPlugin} />);

      const badge = screen.getByText('amp');
      expect(badge).toHaveClass('from-[#FF8C00]', 'to-[#CC7000]');
    });

    it('should display correct gradient for effect category', () => {
      const effectPlugin: PluginData = { ...mockPlugin, category: 'effect' };
      render(<PluginCard plugin={effectPlugin} />);

      const badge = screen.getByText('effect');
      expect(badge).toHaveClass('from-blue-500', 'to-blue-700');
    });

    it('should display correct gradient for compressor category', () => {
      const compressorPlugin: PluginData = { ...mockPlugin, category: 'compressor' };
      render(<PluginCard plugin={compressorPlugin} />);

      const badge = screen.getByText('compressor');
      expect(badge).toHaveClass('from-purple-500', 'to-purple-700');
    });

    it('should display correct gradient for equalizer category', () => {
      const equalizerPlugin: PluginData = { ...mockPlugin, category: 'equalizer' };
      render(<PluginCard plugin={equalizerPlugin} />);

      const badge = screen.getByText('equalizer');
      expect(badge).toHaveClass('from-pink-500', 'to-pink-700');
    });

    it('should display correct gradient for reverb category', () => {
      const reverbPlugin: PluginData = { ...mockPlugin, category: 'reverb' };
      render(<PluginCard plugin={reverbPlugin} />);

      const badge = screen.getByText('reverb');
      expect(badge).toHaveClass('from-cyan-500', 'to-cyan-700');
    });

    it('should display default gradient for unknown category', () => {
      const unknownPlugin: PluginData = { ...mockPlugin, category: 'unknown' };
      render(<PluginCard plugin={unknownPlugin} />);

      const badge = screen.getByText('unknown');
      expect(badge).toHaveClass('from-gray-500', 'to-gray-700');
    });
  });

  describe('Accessibility', () => {
    it('should have correct button role for download', () => {
      render(<PluginCard plugin={mockPlugin} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should be disabled when downloading', () => {
      render(<PluginCard plugin={mockPlugin} downloading={true} />);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });
});
