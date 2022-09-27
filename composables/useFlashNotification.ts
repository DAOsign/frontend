

import React from 'react';

interface Notification {
  id: number;
  message: string;
  type: string;
  remove(): any;
}

let items = <Notification[]>([]);

export function useFlashNotification() {
  function notify(payload: any, duration = 4000) {
    const item: Notification = {
      id: Math.floor(Date.now() * Math.random()),
      message: Array.isArray(payload) ? payload[1] : payload,
      type: Array.isArray(payload) ? payload[0] : 'green',
      remove() {
        items.splice(
          items.findIndex(i => i.id === this.id),
          1
        );
      }
    };

    items.push(item);
    setTimeout(() => item.remove(), duration);
  }

  return { notify, items };
}