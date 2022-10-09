import * as basicLightbox from 'basiclightbox';
import vitaliiUrl from '../images/vitalii-mordovets.jpg'
import vitaliiUrl from '../images/vitalii-mordovets.jpg'
import vitaliiUrl from '../images/vitalii-mordovets.jpg'
import vitaliiUrl from '../images/vitalii-mordovets.jpg'
import vitaliiUrl from '../images/vitalii-mordovets.jpg'
import vitaliiUrl from '../images/vitalii-mordovets.jpg'
import vitaliiUrl from '../images/vitalii-mordovets.jpg'
import vitaliiUrl from '../images/vitalii-mordovets.jpg'
import spriteUrl from '../images/sprite.svg';

const markup = `<div class="team-wrapper"><div class="team-card">
    <img src="${vitaliiUrl}" alt="Ruslana" class="team-image">
    <p class="team-name">Ruslana</p>
    <p class="team-role">Team Lead</p>
    <a href="https://github.com/RuslanaLogosha" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${vitaliiUrl}" alt="Olga" class="team-image">
    <p class="team-name">Olga</p>
    <p class="team-role">Scrum Master</p>
    <a href="https://github.com/levshukova" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${vitaliiUrl}" alt="Daria" class="team-image">
    <p class="team-name">Daria</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Daria-Churkina" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${vitaliiUrl}" alt="Denis" class="team-image">
    <p class="team-name">Denis</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/vbd4eva" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${vitaliiUrl}" alt="Ihor" class="team-image">
    <p class="team-name">Ihor</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/taraiihor" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${vitaliiUrl}" alt="Katya" class="team-image">
    <p class="team-name">Katya</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Kateryna-Urbanovych" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${vitaliiUrl}" alt="Vladymyr" class="team-image">
    <p class="team-name">Vladymyr</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/created-with-love" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${vitaliiUrl}" alt="Aleksandr" class="team-image">
    <p class="team-name">Aleksandr</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/AleksMkm" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div></div>`;
const container = document.querySelector('.js-team-modal');
const markup2 = `<img src="${katyaUrl}"/>`;

container.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
