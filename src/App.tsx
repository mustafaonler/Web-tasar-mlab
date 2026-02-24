
import './App.css';

function App() {
  return (
    <>
      {/* Uygulama-3: Ana içeriğe atla (Skip Link) */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* Uygulama-1 & Uygulama-2: Header, Navigasyon ve H1 Hiyerarşisi */}
      <header>
        <h1>Mustafa Önler - Kişisel Portfolyo</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* Uygulama-5: Hakkımda Bölümü */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img src="../görseller/pplik.jpg" alt="Mustafa Önler'in profil fotoğrafı" />
            <figcaption>Mustafa Önler</figcaption>
          </figure>
          <p>
            Merhaba, ben Mustafa Önler. Fırat Üniversitesi Yazılım Mühendisliği bölümünde öğrenciyim. 
            Algoritmalar, arka uç (backend) geliştirme ve siber güvenlik alanlarına ilgi duyuyorum.
          </p>
          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>C# ve ASP.NET Core</li>
            <li>SQL Server</li>
            <li>Git ve GitHub</li>
            <li>Kali Linux</li>
          </ul>
        </section>

        {/* Uygulama-5: Projeler Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          <article>
            <h3>İlaç ve Randevu Otomasyon Sistemi</h3>
            <p>Hastaların ilaç takiplerini ve randevularını yönetebilmeleri için geliştirdiğim kapsamlı bir masaüstü uygulaması.</p>
            <p><strong>Kullanılan Teknolojiler:</strong> C#, .NET, SQL Server</p>
            <img src="../görseller/indir.jpg" alt="İlaç ve Randevu Otomasyon Sistemi ekran görüntüsü" />
          </article>

          <article>
            <h3>Siber Güvenlik Yarışması Projeleri</h3>
            <p>Siber güvenlik yarışmaları için ESP8266 kullanarak geliştirdiğim Wi-Fi deauthentication aracı ve özel keylogger projesi.</p>
            <p><strong>Kullanılan Teknolojiler:</strong> C/C++, Ağ Güvenliği Araçları</p>
            <img src="../görseller/indir.jpg" alt="ESP8266 Wi-Fi test aracı ve siber güvenlik projesi donanım görseli" />
          </article>
        </section>

        {/* Uygulama-4: İletişim Bölümü (Doğrulamalı Form) */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>
              
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu: </label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Mustafa Önler. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;
