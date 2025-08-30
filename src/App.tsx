import { useState } from 'react'
import { Button } from './components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'
import './App.css'

type ComponentType = 'Button' | 'Input' | 'Card' | 'Tabs' // | 'Modal' | 'Spinner'

function App() {
  const [activeComponent, setActiveComponent] = useState<ComponentType>('Button')

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  const renderComponentSection = () => {
    switch (activeComponent) {
      case 'Button':
        return (
          <div className="component-showcase">
            <div className="component-showcase__header">
              <h2>Button Component</h2>
              <p>Interactive buttons with multiple variants, sizes, and states.</p>
            </div>

            <div className="variant-section">
              <div className="variant-grid">
                <div className="variant-item">
                  <div className="variant-preview">
                    <Button variant="default">Primary Button</Button>
                  </div>
                  <div className="variant-code">
                    <code>&lt;Button variant="default"&gt;Primary Button&lt;/Button&gt;</code>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard('<Button variant="default">Primary Button</Button>')}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="variant-item">
                  <div className="variant-preview">
                    <Button variant="secondary">Secondary Button</Button>
                  </div>
                  <div className="variant-code">
                    <code>&lt;Button variant="secondary"&gt;Secondary Button&lt;/Button&gt;</code>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard('<Button variant="secondary">Secondary Button</Button>')}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="variant-item">
                  <div className="variant-preview">
                    <Button variant="outline">Outline Button</Button>
                  </div>
                  <div className="variant-code">
                    <code>&lt;Button variant="outline"&gt;Outline Button&lt;/Button&gt;</code>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard('<Button variant="outline">Outline Button</Button>')}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="variant-item">
                  <div className="variant-preview">
                    <Button variant="ghost">Ghost Button</Button>
                  </div>
                  <div className="variant-code">
                    <code>&lt;Button variant="ghost"&gt;Ghost Button&lt;/Button&gt;</code>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard('<Button variant="ghost">Ghost Button</Button>')}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="variant-item">
                  <div className="variant-preview">
                    <Button variant="destructive">Destructive Button</Button>
                  </div>
                  <div className="variant-code">
                    <code>&lt;Button variant="destructive"&gt;Destructive Button&lt;/Button&gt;</code>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard('<Button variant="destructive">Destructive Button</Button>')}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="variant-section">
              <h3>Sizes</h3>
              <div className="variant-grid">
                <div className="variant-item">
                  <div className="variant-preview">
                    <Button size="sm">Small</Button>
                  </div>
                  <div className="variant-code">
                    <code>&lt;Button size="sm"&gt;Small&lt;/Button&gt;</code>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard('<Button size="sm">Small</Button>')}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="variant-item">
                  <div className="variant-preview">
                    <Button size="default">Medium</Button>
                  </div>
                  <div className="variant-code">
                    <code>&lt;Button size="default"&gt;Medium&lt;/Button&gt;</code>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard('<Button size="default">Medium</Button>')}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="variant-item">
                  <div className="variant-preview">
                    <Button size="lg">Large</Button>
                  </div>
                  <div className="variant-code">
                    <code>&lt;Button size="lg"&gt;Large&lt;/Button&gt;</code>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard('<Button size="lg">Large</Button>')}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'Tabs':
        return (
          <div className="component-showcase">
            <div className="component-showcase__header">
              <h2>Tabs Component</h2>
              <p>Accessible tabs component with keyboard navigation and ARIA support.</p>
            </div>

            <div className="variant-section">
              <h3>Basic Tabs</h3>
              <div className="variant-grid">
                <div className="variant-item">
                  <div className="variant-preview">
                    <Tabs defaultValue="account" className="w-[400px]">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                      </TabsList>
                      <TabsContent value="account">
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Account Settings</h4>
                          <p className="text-sm text-gray-600">Make changes to your account here.</p>
                        </div>
                      </TabsContent>
                      <TabsContent value="password">
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Password Settings</h4>
                          <p className="text-sm text-gray-600">Change your password here.</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  <div className="variant-code">
                    <code>&lt;Tabs defaultValue="account"&gt;...&lt;/Tabs&gt;</code>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard(`<Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <div className="p-4 border rounded-md">
      <h4 className="font-medium mb-2">Account Settings</h4>
      <p className="text-sm text-gray-600">Make changes to your account here.</p>
    </div>
  </TabsContent>
  <TabsContent value="password">
    <div className="p-4 border rounded-md">
      <h4 className="font-medium mb-2">Password Settings</h4>
      <p className="text-sm text-gray-600">Change your password here.</p>
    </div>
  </TabsContent>
</Tabs>`)}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="variant-item">
                  <div className="variant-preview">
                    <Tabs defaultValue="tab1" className="w-[500px]">
                      <TabsList>
                        <TabsTrigger value="tab1">Overview</TabsTrigger>
                        <TabsTrigger value="tab2">Analytics</TabsTrigger>
                        <TabsTrigger value="tab3">Reports</TabsTrigger>
                        <TabsTrigger value="tab4">Notifications</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tab1">
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Overview</h4>
                          <p className="text-sm text-gray-600">General overview of your dashboard.</p>
                        </div>
                      </TabsContent>
                      <TabsContent value="tab2">
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Analytics</h4>
                          <p className="text-sm text-gray-600">View detailed analytics and metrics.</p>
                        </div>
                      </TabsContent>
                      <TabsContent value="tab3">
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Reports</h4>
                          <p className="text-sm text-gray-600">Generate and download reports.</p>
                        </div>
                      </TabsContent>
                      <TabsContent value="tab4">
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Notifications</h4>
                          <p className="text-sm text-gray-600">Manage your notification preferences.</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  <div className="variant-code">
                    <code>&lt;Tabs&gt; with multiple tabs</code>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard(`<Tabs defaultValue="tab1" className="w-[500px]">
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Analytics</TabsTrigger>
    <TabsTrigger value="tab3">Reports</TabsTrigger>
    <TabsTrigger value="tab4">Notifications</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <div className="p-4 border rounded-md">
      <h4 className="font-medium mb-2">Overview</h4>
      <p className="text-sm text-gray-600">General overview of your dashboard.</p>
    </div>
  </TabsContent>
  <!-- Add other TabsContent components -->
</Tabs>`)}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="variant-section">
              <h3>Vertical Tabs</h3>
              <div className="variant-grid">
                <div className="variant-item">
                  <div className="variant-preview">
                    <Tabs defaultValue="general" orientation="vertical" className="flex w-[600px]">
                      <TabsList className="flex-col h-auto w-48 justify-start">
                        <TabsTrigger value="general" className="w-full justify-start">General</TabsTrigger>
                        <TabsTrigger value="security" className="w-full justify-start">Security</TabsTrigger>
                        <TabsTrigger value="integrations" className="w-full justify-start">Integrations</TabsTrigger>
                        <TabsTrigger value="advanced" className="w-full justify-start">Advanced</TabsTrigger>
                      </TabsList>
                      <div className="flex-1 ml-4">
                        <TabsContent value="general">
                          <div className="p-4 border rounded-md">
                            <h4 className="font-medium mb-2">General Settings</h4>
                            <p className="text-sm text-gray-600">Configure your general preferences and basic settings.</p>
                          </div>
                        </TabsContent>
                        <TabsContent value="security">
                          <div className="p-4 border rounded-md">
                            <h4 className="font-medium mb-2">Security Settings</h4>
                            <p className="text-sm text-gray-600">Manage your security preferences and authentication methods.</p>
                          </div>
                        </TabsContent>
                        <TabsContent value="integrations">
                          <div className="p-4 border rounded-md">
                            <h4 className="font-medium mb-2">Integrations</h4>
                            <p className="text-sm text-gray-600">Connect with third-party services and APIs.</p>
                          </div>
                        </TabsContent>
                        <TabsContent value="advanced">
                          <div className="p-4 border rounded-md">
                            <h4 className="font-medium mb-2">Advanced Settings</h4>
                            <p className="text-sm text-gray-600">Configure advanced options and developer settings.</p>
                          </div>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </div>
                  <div className="variant-code">
                    <code>&lt;Tabs orientation="vertical"&gt;...&lt;/Tabs&gt;</code>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard(`<Tabs defaultValue="general" orientation="vertical" className="flex w-[600px]">
  <TabsList className="flex-col h-auto w-48 justify-start">
    <TabsTrigger value="general" className="w-full justify-start">General</TabsTrigger>
    <TabsTrigger value="security" className="w-full justify-start">Security</TabsTrigger>
    <!-- Add other triggers -->
  </TabsList>
  <div className="flex-1 ml-4">
    <TabsContent value="general">
      <!-- Content -->
    </TabsContent>
    <!-- Add other content -->
  </div>
</Tabs>`)}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="app">
      <div className="app__container">
        <header className="app__header">
          <h1>Scimplify Design System</h1>
          <p>For the design and dev team</p>
        </header>

        <div className="app__layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <nav className="sidebar__nav">
              <h3 className="sidebar__title">Components</h3>
              <ul className="sidebar__list">
                <li>
                  <button 
                    className={`sidebar__item ${activeComponent === 'Button' ? 'sidebar__item--active' : ''}`}
                    onClick={() => setActiveComponent('Button')}
                  >
                    Button
                  </button>
                </li>
                <li>
                  <button 
                    className={`sidebar__item ${activeComponent === 'Tabs' ? 'sidebar__item--active' : ''}`}
                    onClick={() => setActiveComponent('Tabs')}
                  >
                    Tabs
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="main-content">
            {renderComponentSection()}
          </main>
        </div>

        <footer className="app__footer">
          <p>Built with ❤️ using the Scimplify Design System</p>
        </footer>
      </div>
    </div>
  )
}

export default App


// commenting for testing