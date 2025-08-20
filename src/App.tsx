import { useState } from 'react'
import { Button, Card, Input, Modal, Spinner } from './index'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingDemo = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="app">
      <div className="app__container">
        <header className="app__header">
          <h1>Scimplify Design System</h1>
          <p>A comprehensive React component library for modern web applications</p>
        </header>

        <main className="app__main">
          {/* Button Examples */}
          <section className="demo-section">
            <h2>Buttons</h2>
            <div className="demo-grid">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
            <div className="demo-grid">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="demo-grid">
              <Button loading={isLoading} onClick={handleLoadingDemo}>
                {isLoading ? 'Loading...' : 'Click to Load'}
              </Button>
              <Button disabled>Disabled Button</Button>
            </div>
          </section>

          {/* Input Examples */}
          <section className="demo-section">
            <h2>Inputs</h2>
            <div className="demo-grid demo-grid--vertical">
              <Input
                label="Default Input"
                placeholder="Enter some text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="Input with Helper Text"
                placeholder="Enter your email"
                helperText="We'll never share your email with anyone else."
                type="email"
              />
              <Input
                label="Error State"
                placeholder="Invalid input"
                state="error"
                helperText="This field is required."
              />
              <Input
                label="Success State"
                placeholder="Valid input"
                state="success"
                helperText="Looks good!"
              />
            </div>
          </section>

          {/* Card Examples */}
          <section className="demo-section">
            <h2>Cards</h2>
            <div className="demo-grid">
              <Card variant="default">
                <h3>Default Card</h3>
                <p>This is a default card with standard styling.</p>
              </Card>
              <Card variant="bordered">
                <h3>Bordered Card</h3>
                <p>This card has a thicker border for emphasis.</p>
              </Card>
              <Card variant="elevated" hoverable>
                <h3>Elevated Card</h3>
                <p>This card has a shadow and is hoverable.</p>
              </Card>
            </div>
          </section>

          {/* Modal Example */}
          <section className="demo-section">
            <h2>Modal</h2>
            <Button onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
            <Modal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Example Modal"
            >
              <p>This is a modal dialog. You can put any content here.</p>
              <div style={{ marginTop: '1rem' }}>
                <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                  Confirm
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsModalOpen(false)}
                  style={{ marginLeft: '0.5rem' }}
                >
                  Cancel
                </Button>
              </div>
            </Modal>
          </section>

          {/* Spinner Examples */}
          <section className="demo-section">
            <h2>Spinners</h2>
            <div className="demo-grid">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </div>
            <div className="demo-grid">
              <Spinner variant="primary" label="Loading..." />
              <Spinner variant="secondary" label="Processing..." />
            </div>
          </section>
        </main>

        <footer className="app__footer">
          <p>Built with ❤️ using the Scimplify Design System</p>
        </footer>
      </div>
    </div>
  )
}

export default App
