export function Footer() {
  return (
    <footer className="footer">      
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr class="footer__line"></hr>       
      <div className="footer__bottom-line">
        <p className="footer__copyright">© 2020</p> 
        <nav className="footer__nav">
          <a className="footer__nav-link"  target="_blank" rel="noreferrer" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a> 
          <a className="footer__nav-link" target="_blank" rel="noreferrer" href="https://github.com/Yuliya-web">Github</a> 
          <a className="footer__nav-link" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=1753890379">Facebook</a> 
        </nav>
      </div>    
    </footer>
  )
}