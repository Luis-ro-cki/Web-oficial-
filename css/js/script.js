// script.js - WhatsApp Bot Dashboard

function connectNewBot() {
    alert("🟢 Creando nueva instancia de bot...\n\nEn la versión real esto conectará con Evolution API o Baileys.");
    
    // Simulación de QR
    const qrDiv = document.getElementById('qr-code');
    if (qrDiv) {
        qrDiv.innerHTML = '📱 Escanea este QR con WhatsApp (simulado)';
        qrDiv.style.background = '#d4edda';
    }
}

function updateStatus() {
    document.getElementById('status').innerHTML = '✅ Conectado';
    document.getElementById('phone').innerHTML = 'Número: +1234567890';
}

// Ejecutar al cargar
window.onload = updateStatus;