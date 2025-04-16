
document.addEventListener("DOMContentLoaded", function () {

    //  xu ly thoi gian 

        // let timeLeft = localStorage.getItem("timeLeft") ? parseInt(localStorage.getItem("timeLeft")) : 7 * 60;
        


    function add_content() {
        let container = document.querySelector("#booking-ticket .text-center");
    
        if (container) {
            container.innerHTML = `
                <div class="border border-danger rounded-1 p-1 ps-3 pe-3 mb-2 mt-2">
                    Bạn chưa chọn ghế nào. Vui lòng chọn ghế.
                </div>
                <a href="#" style="color:#72be43; text-decoration: none;" class="d-flex flex-column p-2">
                    ← Trở lại
                </a>
                <span>
                    Còn lại <span class="time" style="color:red" id="countdown"></span>
                </span>
            `;
        } else {
            console.error("Không tìm thấy phần tử có ID 'container'");
        }
    }
    

    
    // Gọi hàm để cập nhật nội dung
    add_content();
    
    

    function add_new_content(amount) {
        let container = document.querySelector("#booking-ticket .text-center");
    
        if (container) {
            container.innerHTML = `
                <div class="fs-5 fw-bold pb-2">Tổng Số Tiền : ${amount}  VND</div>
                <div class="btn btn-md fw-bold text-white" 
                    style="background: linear-gradient(to bottom, #388E1B, #72be00); width: 100%;">
                    <a href="#2" style = "text-decoration: none;" class = "text-white" >Vui lòng chọn bước số 3</a>
                </div>
            `;
        } else {
            console.error("Không tìm thấy phần tử có ID 'container'");
        }
    }
    
    // Gọi hàm để cập nhật nội dung
    // add_new_content(50000);
    
    
    // Gọi hàm để thêm nội dung vào trang
    // add_new_content();
    
    
    const seatMap = document.querySelector(".seat-map");

    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"]; // 9 hàng
    const cols = 18; // 18 cột

    // const soldSeats = ["E5", "E6", "E7", "E8", "E9", "E10", "E11", "E12", "E13", "E14", "E15", 
    //                    "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14","F15", 
    //                    "G6", "G7", "G8", "G9", "G10", "G11", "G12", "G13", "G14"];
    const soldSeats = [];
    const coupleSeats = [];

   
    const vipSeats = ["E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11", "E12", "E13", "E14","E15", 
                        "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14","F15", 
                         "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10", "G11", "G12", "G13", "G14","G15", 
                             "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "H11", "H12", "H13", "H14","H15",];
    // const coupleSeats = ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10", "I11", "I12", "I13", "I14"];
    
    
    let cost = 0;

    const seat_couple = document.querySelectorAll("#booking-ticket .couple-couch .couple")
        seat_couple.forEach((couple) => {
            
            couple.addEventListener("click", function () {
                if (!this.classList.contains("sold")) {
                    console.log(this)
                    this.classList.toggle("selected");
                    cost += 80000
                    if(!this.classList.contains("selected")) {
                        if(cost) cost -= 160000;
                    }
                }
                
                if(cost != 0){
                   add_new_content(cost)
                }else{
                    add_content()
                }

            });

        })

    rows.forEach(row => {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row");

        const rowLabel = document.createElement("div");
        rowLabel.classList.add("row-label");
        rowLabel.innerText = row;
        
        rowContainer.prepend(rowLabel);

        
        // console.log(seat_couple)

        for (let col = 1; col <= cols; col++) {
            let seat = document.createElement("div");
            let seatId = `${row}${col}`;
            seat.classList.add("seat");

            // Gán loại ghế
            if (soldSeats.includes(seatId)) {
                seat.classList.add("sold");
            } else if (vipSeats.includes(seatId)) {
                seat.classList.add("vip");
            } else if (coupleSeats.includes(seatId)) {
                seat.classList.add("couple");
            } else {
                seat.classList.add("standard");
            }

            seat.innerHTML = '<i class="fa-solid fa-couch" style = "font-size : 27px;"</i>';
            seat.dataset.id = seatId;

             // gia tien 

            // Thêm sự kiện chọn ghế
            seat.addEventListener("click", function () {
                if (!this.classList.contains("sold")) {
                    // console.log(this)
                    this.classList.toggle("selected");
                    if(this.classList.contains("vip")) {
                        cost += 40000;
                    }
                    else if(this.classList.contains("standard")) {
                        cost += 40000;
                    }
                    if(!this.classList.contains("selected")) {
                        if(cost) cost -= 80000;
                    }
                }
                
                if(cost != 0){
                    add_new_content(cost)
                 }else{
                     add_content()
                 }
                
                // console.log(cost)
            });
            
            
            rowContainer.appendChild(seat);
        }
        

        seatMap.appendChild(rowContainer);

        
    });

        
        timeLeft =  7 * 60; 
        if (timeLeft === 0) {
            document.getElementById("countdown").innerText = "Hết thời gian!";
        }

        // Hàm để cập nhật thời gian còn lại
        function updateCountdown() {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;

            // Định dạng thời gian dưới dạng "Phút:Giây"
            document.getElementById("countdown").innerText = `${minutes} phút ${seconds} giây`;

            // Giảm đi 1 giây mỗi lần
            if (timeLeft > 0) {
                timeLeft--;
                // Lưu lại thời gian còn lại vào localStorage
                localStorage.setItem("timeLeft", timeLeft);
            } else {
                // Dừng đếm ngược khi hết thời gian
                document.getElementById("countdown").innerText = "Hết thời gian!";
                // Xóa thời gian còn lại khi đã hết
                localStorage.setItem("timeLeft", 0);
            }
        }

        // Cập nhật mỗi giây
        let countdownTimer = setInterval(updateCountdown, 1000);

        // Gọi hàm để khởi động ngay lập tức
        updateCountdown();

        add_content();

    
});





