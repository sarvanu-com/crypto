import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { urlList } = await request.json();

    if (!urlList || !Array.isArray(urlList)) {
      return NextResponse.json(
        { error: 'Invalid URL list provided. Expecting an array of URLs.' },
        { status: 400 }
      );
    }

    const host = 'texnova.org';
    const key = process.env.INDEXNOW_KEY;
    const keyLocation = process.env.INDEXNOW_KEY_LOCATION;

    if (!key) {
      console.error('INDEXNOW_KEY is missing from environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const indexNowPayload = {
      host: host,
      key: key,
      keyLocation: keyLocation,
      urlList: urlList,
    };

    // IndexNow recommends submitting to API endpoint: api.indexnow.org
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(indexNowPayload),
    });

    if (res.ok) {
      return NextResponse.json({ success: true, message: 'URLs submitted to IndexNow.' });
    } else {
      const errorText = await res.text();
      return NextResponse.json(
        { error: 'Failed to submit to IndexNow', details: errorText },
        { status: res.status }
      );
    }
  } catch (error) {
    console.error('IndexNow submission failed:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
