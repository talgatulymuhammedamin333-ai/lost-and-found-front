import React from 'react';

function Footer() {
  return (
    <footer className="bg-yellow-100 mt-40       border-t">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h2 className="text-2xl font-bold text-orange-400">
              Lost & Found
            </h2>
            <p className=" mt-2 max-w-sm">
              Жоғалған және табылған заттарды жариялауға арналған платформа.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Беттер</h3>
            <ul className="space-y-2">
              <li>
                <a href="/">Басты бет</a>
              </li>
              <li>
                <a href="/lost">Жоғалған заттар</a>
              </li>
              <li>
                <a href="/found">Табылған заттар</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Байланыс</h3>
            <ul className="space-y-2">
              <li>Email: support@lostfound.kz</li>
              <li>Тел: +7 777 777 77 77</li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;