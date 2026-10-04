import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { companyData, gabriela } from '@/lib/constants';

export const alt = `${companyData.fullName} — ${gabriela.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), 'src/assets/gabriela-gomes.png'));
  const photoSrc = `data:image/png;base64,${photo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 64,
          padding: '0 80px',
          background: 'linear-gradient(135deg, #2d5016 0%, #1f3a0f 60%, #1f4d4d 100%)',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ fontSize: 28, color: '#d4a574', letterSpacing: 4, textTransform: 'uppercase' }}>
            Full Cycle
          </div>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.15, marginTop: 24 }}>
            Consultoria ambiental e restauração ecológica
          </div>
          <div style={{ fontSize: 28, color: '#e1ead6', marginTop: 32 }}>
            {`${gabriela.name} · Santa Catarina · Brasil e Austrália`}
          </div>
        </div>
        <img
          src={photoSrc}
          width={360}
          height={360}
          alt=""
          style={{ borderRadius: 40, border: '6px solid rgba(255,255,255,0.15)' }}
        />
      </div>
    ),
    size,
  );
}
