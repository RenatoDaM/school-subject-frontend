class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="navbar"> 
                <div id="nav-inner-container">
                    <img src="./images/logo.png" alt="">
                    <div>PowerSupply</div>
                </div>
                <div id="nav-sections-container">
                    <div onclick="window.location.href='./home.html'">Início</div>
                    <div onclick="window.location.href='./food-menu.html'">Cardápio</div>
                    <div onclick="window.location.href='./about-us.html'">Sobre Nós</div>
                    <div onclick="window.location.href='./food-menu.html'">Contato</div>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', Navbar);