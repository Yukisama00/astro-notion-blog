export async function GET({ request }) {
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get('url');
  
  if (!targetUrl) {
    return new Response('Missing URL parameter', { status: 400 });
  }
  
  try {
    const response = await fetch(targetUrl);
    const content = await response.text();
    
    return new Response(content, {
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return new Response('Failed to fetch content', { status: 500 });
  }
}