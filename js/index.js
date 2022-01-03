function makeCustomProgressBar(title, porcentageNumber, colorBootstrap, oneWordInfo) {
    let html = `
    <div class="float-right"><div class="float-right">${oneWordInfo}</div></div>
        <h4>${title}</h4>
            <div class="progress" style="height:5px; margin-bottom: 25px;">
                <div class="progress-bar bg-${colorBootstrap}" role="progressbar" style="width: ${porcentageNumber}%;" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
    `
    return html;
}