$(document).ready(function () {

    // Ad has started.
    assignClickHandlers();

    var agent = navigator.userAgent;
    var checkagent1 = agent.includes("Brightsign");
    var checkagent2 = agent.includes("MW22");
    var checkagent3 = agent.includes("MW15");

    //*** Opens an external URL
    function openExternalLinkFull(e, clickTag) {
        console.log('link')
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestFullscreenBrowserView(clickTag);
        } else {
            window.open(clickTag);
        }
    }
    //external pdf
    function openExternalPDF(e, pdfUrl) {
        console.log('pdf')
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestPDFView(pdfUrl);
            event.stopPropagation();
        } else {
            window.open(pdfUrl);
        }
    }



    function assignClickHandlers() {
        //external links
        //customer click tag here
        $('#main')[0].addEventListener("click", function (e) {
            openExternalLinkFull(e, "https://ad.doubleclick.net/ddm/clk/553298282;362716929;y");
        }, false);

        // $('#fda')[0].addEventListener("click", function (e) {
        //     openExternalLinkFull(e, "https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program");
        // }, false);


        //pdf links
        $('#pi')[0].addEventListener("click", function (e) {
            openExternalPDF(e, "https://doptelet.com/themes/pdf/prescribing-information.pdf");
        }, false);


        $('#mg')[0].addEventListener("click", function (e) {
            openExternalPDF(e, "https://doptelet.com/themes/pdf/patient-information-leaflet.pdf");
        }, false);

        $('#mainPI')[0].addEventListener("click", function (e) {
            openExternalPDF(e, "https://doptelet.com/themes/pdf/prescribing-information.pdf");
        }, false);


        $('#mainMG')[0].addEventListener("click", function (e) {
            openExternalPDF(e, "https://doptelet.com/themes/pdf/patient-information-leaflet.pdf");
        }, false);



    }
});