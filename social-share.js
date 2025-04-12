class SocialShare extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const twitter = this.getAttribute('twitter') || '#';
    const facebook = this.getAttribute('facebook') || '#';
    const linkedin = this.getAttribute('linkedin') || '#';
    const whatsapp = this.getAttribute('whatsapp') || '#';
    this.shadowRoot.innerHTML = `
      <style>
        .share {
          margin-top: 20px;
          display: flex;
          flex-direction: row;
          gap: 8px;
          font-family: sans-serif;
          overflow: auto;
          flex-wrap: wrap;
        }
        .share a {
          text-decoration: none;
          color: #0077cc;
          font-weight: bold;
          margin-right: 20px;
        }
        .share a:hover {
          text-decoration: underline;
        }
      </style>
      <div class="share">
        <a href="${twitter}" target="_blank">Share on Twitter 🐦</a>
        <a href="${facebook}" target="_blank">Share on Facebook 📘</a>
        <a href="${linkedin}" target="_blank">Share on LinkedIn 💼</a>
        <a href="${whatsapp}" target="_blank">Share on WhatsApp 📱</a>
      </div>
    `;
  }
}
customElements.define('social-share', SocialShare);

