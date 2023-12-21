$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });

  $(".header__btn-menu").on("click", function () {
    $(".menu").toggleClass("menu--open");
  });

  if ($(window).width() < 651) {
    $(".works-path__item--measuring").appendTo($(".works-path__items-box"));
  }

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });

  $(".contact-slider").slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 1511,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  });

  $(".article-slider__box").slick({
    prevArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow left"></button>',
    nextArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow right"></button>',
  });

  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
  });
});

document.addEventListener(
  'DOMContentLoaded',
  function () {
    const modals = [
      'data-first-modal',
      'data-second-modal',
    ];

    modals.forEach(element => {
      const openModalSelector = element + '-open';
      const closeModalSelector = element + '-close';

      const openModalBtns = document.querySelectorAll(`[${openModalSelector}]`);
      const closeModalBtns = document.querySelectorAll(
        `[${closeModalSelector}]`
      );
      const modal = document.querySelector(`[${element}]`);

      if (!modal) logModalError('Can`t find Modal with attribute ' + modal);
      if (openModalBtns.length === 0)
        logModalError(
          'Can`t find Open modal button with attribute ' + openModalSelector
        );
      if (closeModalBtns.length === 0)
        logModalError(
          'Can`t find Close modal button with attribute ' + closeModalSelector
        );
      if (!modal || openModalBtns.length === 0 || closeModalBtns.length === 0)
        return;

      openModalBtns.forEach(openBtn =>
        openBtn.addEventListener('click', toggleModal)
      );
      closeModalBtns.forEach(closeBtn =>
        closeBtn.addEventListener('click', toggleModal)
      );

      function toggleModal() {
        document.body.classList.toggle('modal-open');
        modal.classList.toggle('is-hidden');
      }
    });
  },
  false
);

function logModalError(text) {
  const styles = 'color: #bada55';
  console.log('%c' + text, styles);
}

const form = document.querySelector("#modal__form");

const modal = document.querySelector("#modal");

const backdrop = document.querySelector("#modal__backdrop");

const modal__button = document.querySelector("#modal__form-button");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var email = document.getElementById("subscribe__email").value;

    var subscribe = `New subscriber with email ${email}`;

    var token = "6846540443:AAGGI8VumuKvVGYdKDHcDShKNDvhdE_V5Ik";
    var chat_id = -1002129084648;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${subscribe}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log("Subscribe successfully sended!");
    toggleModal1();
    form.reset();

});

function disableScroll1() {
    document.body.style.setProperty('overflow', 'hidden', 'important');
}

function enableScroll1() {
    document.body.style.removeProperty('overflow');
}

function openModal1() {
    modal.classList.add('is-visible');
    disableScroll1(); 
  }
  
function closeModal1() {
    modal.classList.remove('is-visible');
    enableScroll1();
}
  
function toggleModal1() {
    document.body.classList.toggle('modal-open');
    modal.classList.toggle('is-visible');
    backdrop.classList.toggle('is-hidden');
}

const blog__form = document.querySelector("#blog-one__form");

const blog__modal = document.querySelector("#blog-one__modal");

const blog__backdrop = document.querySelector("#blog-one__backdrop");

const blog__button = document.querySelector("#blog-one__modal-button");

blog__form.addEventListener("submit", (e) => {
    e.preventDefault();

    var name = document.getElementById("blog-one__name").value;
    var email = document.getElementById("blog-one__email").value;
    var comment = document.getElementById("blog-one__comment").value;

    var review = `New comment from ${name}: "${comment}"%0AEmail: ${email}`;

    var token = "6828458385:AAEkkfRrubAAFUAsgwMrywmMzigojFGJ3To";
    var chat_id = -1002129084648;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${review}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log("Review successfully sended!");
    toggleModal2();
    blog__form.reset();

});

function disableScroll2() {
    document.body.style.setProperty('overflow', 'hidden', 'important');
}

function enableScroll2() {
    document.body.style.removeProperty('overflow');
}

function openModal2() {
  blog__modal.classList.add('is-visible');
    disableScroll2(); 
  }
  
  function closeModal2() {
    blog__modal.classList.remove('is-visible');
    enableScroll2();
  }
  
  function toggleModal2() {
    document.body.classList.toggle('modal-open');
    blog__modal.classList.toggle('is-visible');
    blog__backdrop.classList.toggle('is-hidden');
  }