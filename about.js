```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a ReferenceError if you don't export a default function
  const message = 'This is the about page.';
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
```