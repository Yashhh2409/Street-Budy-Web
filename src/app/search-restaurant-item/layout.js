export default function SearchLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="...">
          {/* ✅ No Header or Footer here */}
          {children}
        </div>
      </body>
    </html>
  );
}
