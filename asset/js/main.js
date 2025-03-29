// commom used

const handleChangeRightSlide = () => {
    if(current_index_slide_header == length_slide_header_img - 1) {
        current_index_slide_header = 0
        let width_slide_header = imgs_slide_header[0].offsetWidth;
        list_image_header.style.transform = `translateX(0px)`
        document.querySelector(".active").classList.remove("active")
        document.querySelector(".index-" + current_index_slide_header).classList.add("active")

    }else{
        current_index_slide_header++
        let width_slide_header = imgs_slide_header[0].offsetWidth;
        list_image_header.style.transform = `translateX(${width_slide_header *-1*current_index_slide_header}px)`
        document.querySelector(".active").classList.remove("active")
        document.querySelector(".index-" + current_index_slide_header).classList.add("active")
    }
}

const handleChangeleftSlide = () => {
    if(current_index_slide_header == 0) {
        current_index_slide_header = length_slide_header_img - 1
        let width_slide_header = imgs_slide_header[0].offsetWidth;
        list_image_header.style.transform = `translateX(${width_slide_header *-1*current_index_slide_header}px)`
        document.querySelector(".active").classList.remove("active")
        document.querySelector(".index-" + current_index_slide_header).classList.add("active")
    }else{
        current_index_slide_header --
        let width_slide_header = imgs_slide_header[0].offsetWidth;
        list_image_header.style.transform = `translateX(${width_slide_header *-1*current_index_slide_header}px)`
        document.querySelector(".active").classList.remove("active")
        document.querySelector(".index-" + current_index_slide_header).classList.add("active")
    }
}


// xu ly navbar
const navbar_dropdown = document.getElementById("nav_dropdown")
const right_navbar = document.getElementById("right-navbar")

right_navbar.addEventListener("mouseover", () => {
    navbar_dropdown.style.display = "block";
});

right_navbar.addEventListener("mouseleave",() => {
    navbar_dropdown.style.display = "none";
})

const btn_1 = document.querySelector("#nav_dropdown .btn_1");

btn_1.addEventListener("mouseover", () => {
    btn_1.style.backgroundColor = "#14b81f";
})

btn_1.addEventListener("mouseleave", () => {
    btn_1.style.backgroundColor = "#72be43";
})

const btn_2 = document.querySelector("#nav_dropdown .btn_2");

btn_2.addEventListener("mouseover", () => {
    btn_2.style.backgroundColor = "#14b81f";
    btn_2.style.color = "#fff";
})

btn_2.addEventListener("mouseleave", () => {
    btn_2.style.backgroundColor = "#fff";
    btn_2.style.color = "#72be43";
})

const hover_nav = document.getElementById("hover_nav")
// console.log(hover_nav)

hover_nav.addEventListener("mouseover", () => {
    hover_nav.style.backgroundColor = "#14b81f";
})

hover_nav.addEventListener("mouseleave", () => {
    hover_nav.style.backgroundColor = "#72be43";

})

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn trang reload khi submit form
    console.log("Form submitted");
    // Thêm logic xử lý đăng nhập tại đây
});

document.getElementById("registerButton").addEventListener("click", function() {
    console.log("Chuyển sang trang đăng ký");
    // Thêm logic chuyển hướng sang trang đăng ký tại đây
});

document.getElementById("hover_nav").addEventListener("click", function(event) {
    event.preventDefault();
    let dropdown = document.getElementById("nav_dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

//  fix
document.getElementById("button_forgotpassword").addEventListener("click", function() {
    window.location.href = "https://example.com"; // Đổi URL thành trang bạn muốn chuyển đến
});


// slide header


const list_image_header = document.querySelector("#slide-header .list-images");

const imgs_slide_header = document.querySelectorAll("#slide-header .list-images img")

let current_index_slide_header = 0
const length_slide_header_img = imgs_slide_header.length

let handleEventChangeSlide = setInterval(handleChangeRightSlide,7000)

const btn_left_slide_header = document.querySelector("#slide-header .btn-left")
const btn_right_slide_header = document.querySelector("#slide-header .btn-right")

btn_right_slide_header.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    handleChangeRightSlide()
    handleEventChangeSlide = setInterval(handleChangeRightSlide,7000)
})

btn_left_slide_header.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    handleChangeleftSlide()
    handleEventChangeSlide = setInterval(handleChangeRightSlide,7000)
} )

// content


// now-showing
const cardItems1 = document.querySelectorAll("#now-showing-slide .card-item");

cardItems1.forEach((card) => {
  const buyNow = card.querySelector(".buy_now");
  const continueEl = card.querySelector(".continue");

  // Khi chuột vào card, hiển thị các phần tử
  card.addEventListener("mouseenter", () => {
    if (buyNow) buyNow.style.visibility = "visible";
    if (continueEl) continueEl.style.display = "block";
  });

  // Khi chuột rời khỏi card, ẩn các phần tử
  card.addEventListener("mouseleave", () => {
    if (buyNow) buyNow.style.visibility = "hidden";
    if (continueEl) continueEl.style.display = "none";
  });
});



// coming-soon
const cardItems_coming_soon = document.querySelectorAll("#coming-soon .card-link");

cardItems_coming_soon.forEach((card) => {
  // Lấy phần tử ảnh, buy_now và continue trong mỗi card
  const img = card.querySelectorAll("img");
  img.forEach((img_index) => {
    const continueEl = card.querySelector(".continue");
    const continueEl1 = card.querySelector(".continue1");

    // Gắn sự kiện cho ảnh của card
    img_index.addEventListener("mouseover", () => {
        if (continueEl) continueEl.style.display = "block";
        if (continueEl1) continueEl1.style.display = "block";
    });

    img_index.addEventListener("mouseout", () => {
        if (continueEl) continueEl.style.display = "none";
        if (continueEl1) continueEl1.style.display = "none";
    });


  })

});

