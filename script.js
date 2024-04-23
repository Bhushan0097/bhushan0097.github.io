const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>
{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>
{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

function myFunction()
{
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none")
  {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else
  {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index)
{
  if (index < 0)
  {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides)
  {
    currentIndex = 0;
  } else
  {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide()
{
  showSlide(currentIndex + 1);
}

function prevSlide()
{
  showSlide(currentIndex - 1);
}

// Optionally, you can add automatic slide changing
// setInterval(nextSlide, 5000); // Change slide every 5 seconds
