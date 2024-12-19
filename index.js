var btn = document.querySelector('#btn-done');

var toast = document.querySelector('.myToast');





var infolist = []
var Websitename = document.getElementById("exampleInputname");
var WebsiteLink = document.getElementById("exampleInputlink");
var mainbtn = document.getElementById("btn-done")
var selectedindex = -1


function createnew() {
    var websiteObject =
    {
      name: Websitename.value,
      link: WebsiteLink.value
    };
    infolist.push(websiteObject);

   
  
    readnew();
    clearForm();
}

function deleteNoteFromList(index){
    infolist.splice(index,1);
    readnew();
}

function clearForm() {
    WebsiteLink.value = '';
    Websitename.value = '';
}


function readnew() {
    var index = 0
    var HTMLCollectionwebsite = ``;
  
    for (var note of infolist) {
  
      HTMLCollectionwebsite +=
        ` <div class="border border-1 rounded-1 border-light shadow p-2 box ">
            <div >
                <div class="d-flex">
                    <div>
                        <p class="fw-bold text-light">${note.name}</p>
                    </div>
                    <div class="ps-4">
                        <button type="button" class="bg-dark border border-0 " onclick="editNoteFromList(${index})"><i
                                class="fa-solid fa-pen" style="color: #ffffff;"></i></button>
                        <button type="button" class="bg-dark border border-0 " onclick="deleteNoteFromList(${index})"><i
                                class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
                    </div>
                </div>
                <div>
                    <p class="fw-light text-light"> ${note.link} </p>
                    <a href="https://${note.link}" target="_blank" class="text-decoration-none text-success">Go To
                        Website</a>
                </div>
            </div>
        </div>`
  
      index++
    }
  
    boxView.innerHTML = HTMLCollectionwebsite;

}





var settingFrom = document.getElementById('settingFrom');

settingFrom.addEventListener('submit', function(e) {
    var regex = /^[a-z]{1,}[A-Za-z\d]{1,}.com$/g;
    
    if (WebsiteLink.value === '' || !regex.test(WebsiteLink.value)) {
        e.preventDefault();
        WebsiteLink.classList.add('border-danger');  
        btn.addEventListener('click', function () {
            toast.classList.add('adjecnet-right')
            setTimeout(function () {
                toast.classList.remove('adjecnet-right');
            }, 4000)
        })
    }else{
        e.preventDefault();        
        WebsiteLink.classList.remove('border-danger')
        WebsiteLink.classList.add('border-success')
        toast.classList.remove('adjecnet-right')
        createnew()
    }
})










