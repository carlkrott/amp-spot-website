import { NextResponse } from 'next/server';
import { existsSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

// Map plugin slugs to their download files
const pluginFileMap: Record<string, string> = {
  'eq': 'amp-spot-eq-macos.tar.gz',
  'compressor': 'amp-spot-comp-macos.tar.gz',
  'analyzer': 'amp-spot-analyzer-macos.tar.gz',
  'ms-processor': 'amp-spot-ms-macos.tar.gz',
};

export async function GET(request: Request, { params }: RouteParams) {
  const { slug } = await params;
  
  try {
    // Map slug to file
    const filename = pluginFileMap[slug];
    
    if (!filename) {
      return NextResponse.json(
        { success: false, error: 'No download available for this plugin' },
        { status: 404 }
      );
    }
    
    // Path to file in public/downloads
    const filePath = join(process.cwd(), 'public', 'downloads', filename);
    
    // Check if file exists
    if (!existsSync(filePath)) {
      return NextResponse.json(
        { success: false, error: 'Download file not found' },
        { status: 404 }
      );
    }
    
    // Read file
    const fileBuffer = readFileSync(filePath);
    const stats = statSync(filePath);
    
    // Determine content type
    const contentType = 'application/gzip';
    
    // Create response with file
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: new Headers({
        'Content-Type': contentType,
        'Content-Length': stats.size.toString(),
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'public, max-age=86400', // 1 day cache
      }),
    });
    
    return response;
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to serve download' },
      { status: 500 }
    );
  }
}
