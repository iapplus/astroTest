import type {APIContext} from 'astro';

export async function GET() {
    return new Response(JSON.stringify({
        message: 'Hello from Astro API!',
        timestamp: new Date().toISOString()
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function POST({request}: APIContext) {
    try {
        const body = await request.json();

        return new Response(JSON.stringify({
            message: 'POST request received',
            data: body,
            timestamp: new Date().toISOString()
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({
            error: 'Invalid JSON body'
        }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
