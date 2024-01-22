import React from 'react';
import Layout from '@theme/Layout';

export default function HelloReact() {
  return (
    <Layout title="Hello React" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/hello-react.tsx</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}