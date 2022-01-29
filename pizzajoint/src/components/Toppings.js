import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    trasition: {
      type: 'spring', 
      delay: 0.5
    }
  }

  }

  const buttonVariants = {
    /*  //left right moving
    visible : {
      x: [0, -20, 20, -20, 0],
  transition: {delay: 2 }
    }, */
    hover: {
      //keyframes moving btn
      // scale: [1,1.1,1,1.1,1,1.1,1],
      scale: 1.1,
      textShadow: '0px 0px 8px rgb(255,255,255)',
      boxShadow: '0px 0px 8px rgb(255,255,255)',
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  }

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            whileHover={{ scale: 1.3, originX: 0, color: '#f8e112'}}
            trasition={{ type: 'spring', stiffness: 300}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"

        > Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;