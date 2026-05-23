import {
  FaMicrochip,
  FaWifi,
  FaSatelliteDish,
  FaRobot,
  FaMemory,
  FaBroadcastTower,
  FaNetworkWired,
  FaBluetooth,
  FaDatabase,
  FaCloud,
} from "react-icons/fa"

import {
  MdSensors,
  MdDeveloperBoard,
  MdOutlineMemory,
} from "react-icons/md"

import {
  GiProcessor,
  GiCircuitry,
  GiArtificialHive,
  GiRadarDish,
  GiElectric,
} from "react-icons/gi"

export default function FloatingTech(){

  const icons = [

    {
      icon:<FaMicrochip />,
      className:"tech-icon tech-front tech-cyan icon-1",
    },

    {
      icon:<FaWifi />,
      className:"tech-icon tech-mid tech-blue icon-2",
    },

    {
      icon:<FaSatelliteDish />,
      className:"tech-icon tech-back tech-purple icon-3",
    },

    {
      icon:<MdSensors />,
      className:"tech-icon tech-front tech-cyan icon-4",
    },

    {
      icon:<GiProcessor />,
      className:"tech-icon tech-mid tech-white icon-5",
    },

    {
      icon:<FaRobot />,
      className:"tech-icon tech-back tech-blue icon-6",
    },

    {
      icon:<FaMemory />,
      className:"tech-icon tech-mid tech-purple icon-7",
    },

    {
      icon:<GiCircuitry />,
      className:"tech-icon tech-front tech-cyan icon-8",
    },

    {
      icon:<MdDeveloperBoard />,
      className:"tech-icon tech-back tech-white icon-9",
    },

    {
      icon:<FaBroadcastTower />,
      className:"tech-icon tech-mid tech-blue icon-10",
    },

    {
      icon:<GiArtificialHive />,
      className:"tech-icon tech-front tech-purple icon-11",
    },

    {
      icon:<FaNetworkWired />,
      className:"tech-icon tech-back tech-cyan icon-12",
    },

    {
      icon:<FaBluetooth />,
      className:"tech-icon tech-mid tech-blue icon-13",
    },

    {
      icon:<FaDatabase />,
      className:"tech-icon tech-front tech-white icon-14",
    },

    {
      icon:<FaCloud />,
      className:"tech-icon tech-back tech-purple icon-15",
    },

    {
      icon:<MdOutlineMemory />,
      className:"tech-icon tech-mid tech-cyan icon-16",
    },

    {
      icon:<GiRadarDish />,
      className:"tech-icon tech-front tech-blue icon-17",
    },

    {
      icon:<GiElectric />,
      className:"tech-icon tech-back tech-white icon-18",
    },

  ]

  return(

    <div className="floating-tech-bg">

      {icons.map((item,index)=>(

        <div
          key={index}
          className={item.className}
        >
          {item.icon}
        </div>

      ))}

    </div>

  )

}