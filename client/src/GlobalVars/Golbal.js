export function updateCheckedStatus(appName, checked) {
  const item = appList.find((app) => app.name == appName);
  if (item !== null || item !== undefined) item.checked = checked;
}

let appList = [];
var PORT = import.meta.env.VITE_PORT;
let uri = "https://easy-install-server.vercel.app/getApps";

async function fetchAppList()
{
    try{
        const response = await fetch(uri);
        const data = await response.json();
        appList = data;
        return appList;
    } catch (error) {
        console.error('Error fetching appList:', error);
    }
}

await fetchAppList();

export {appList};
