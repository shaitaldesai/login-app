import React from 'react';
import DeviceListItem from './deviceListItem.js';

const DeviceList = (props) => {
  return (
    <div>
      {props.list.map((device) => {
        return <DeviceListItem device={device} key={device.num} />
        })
      }
    </div>
  )
}

export default DeviceList; 