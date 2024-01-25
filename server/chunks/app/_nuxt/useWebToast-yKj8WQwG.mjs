import { v as useWebNotification } from './index-daJZwzbi.mjs';

function useWebToast(title, body, opts) {
  const windToast = useWebNotification({
    title,
    body,
    icon: "/logo.png",
    ...opts
  });
  if (windToast.isSupported)
    windToast.show();
}

export { useWebToast as u };
//# sourceMappingURL=useWebToast-yKj8WQwG.mjs.map
