
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

function openPdf(event, pdfUrl) {

    event.preventDefault();

    document.getElementById("pdfViewer").src = pdfUrl;

    document.getElementById("pdfModal").style.display = "flex";
}

function closePdf() {

    document.getElementById("pdfModal").style.display = "none";

    document.getElementById("pdfViewer").src = "";
}

const pdfModal = document.getElementById("pdfModal");

pdfModal.addEventListener("click", function (e) {

    if (e.target === pdfModal) {
        closePdf();
    }

});