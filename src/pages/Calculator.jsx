import { useState } from 'react'
import { ArrowLeft, Trash2, Edit, Check, X } from 'lucide-react';

function Button({ children, onClick, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-gray-200 hover:bg-gray-300',
    operator: 'bg-blue-500 text-white hover:bg-blue-600',
    equal: 'bg-green-500 text-white hover:bg-green-600',
    clear: 'bg-red-500 text-white hover:bg-red-600'
  }

  return (
    <button 
      onClick={onClick}
      className={`p-4 rounded ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

function Display({ equation, display }) {
  return (
    <div className="bg-gray-100 p-4 rounded mb-4">
      <div className="text-gray-500 text-sm h-6">{equation}</div>
      <div className="text-right text-2xl font-bold">{display}</div>
    </div>
  )
}

function SimpleCalculator() {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')

  const handleNumber = (number) => {
    if (display === '0') {
      setDisplay(number)
    } else {
      setDisplay(display + number)
    }
  }

  const handleOperator = (operator) => {
    setEquation(display + ' ' + operator + ' ')
    setDisplay('0')
  }

  const handleEqual = () => {
    try {
      const result = new Function('return ' + equation + display)()
      setDisplay(result.toString())
      setEquation('')
    } catch (error) {
      setDisplay('Error')
      setEquation('')
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setEquation('')
  }

  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
  {/* Back to Projects Button */}
  <div >
    <a  
      href="/"
      onClick={(e) => {
        e.preventDefault();
        window.location.pathname = '/';
      }}
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Projects
    </a>
  </div>

  {/* Calculator */}
  <h1 className="text-4xl font-bold mt-6 mb-6 text-center">
    Simple Calculator
  </h1>
  <div className="bg-white mt-6 p-6 text-xl rounded-lg shadow-lg w-80">
    <Display equation={equation} display={display} />
    
    <div className="grid grid-cols-4 gap-2">
      <Button onClick={handleClear} variant="clear" className="col-span-2">
        Clear
      </Button>
      <Button onClick={() => handleOperator('/')} variant="operator">÷</Button>
      <Button onClick={() => handleOperator('*')} variant="operator">×</Button>
      
      {[7, 8, 9].map((num) => (
        <Button key={num} onClick={() => handleNumber(num.toString())}>
          {num}
        </Button>
      ))}
      <Button onClick={() => handleOperator('-')} variant="operator">-</Button>
      
      {[4, 5, 6].map((num) => (
        <Button key={num} onClick={() => handleNumber(num.toString())}>
          {num}
        </Button>
      ))}
      <Button onClick={() => handleOperator('+')} variant="operator">+</Button>
      
      {[1, 2, 3].map((num) => (
        <Button key={num} onClick={() => handleNumber(num.toString())}>
          {num}
        </Button>
      ))}
      <Button onClick={handleEqual} variant="equal">=</Button>
      
      <Button onClick={() => handleNumber('0')} className="col-span-2">
        0
      </Button>
      <Button onClick={() => handleNumber('.')}>.</Button>
    </div>
  </div>
</div>

  )
}

export default SimpleCalculator