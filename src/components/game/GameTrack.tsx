import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ErrorBoundary } from '../ErrorBoundary';
import { Maximize2, Minimize2, Smartphone, X, Monitor, Tablet } from 'lucide-react';

declare global {
  interface Window {
    createUnityInstance: (
      canvas: HTMLCanvasElement,
      config: any,
      onProgress?: (progress: number) => void
    ) => Promise<any>;
  }
}

// Definición de tipos para el documento con funciones de pantalla completa
interface FullscreenDocument extends Document {
  webkitExitFullscreen?: () => Promise<void>;
  mozCancelFullScreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
  webkitFullscreenElement?: Element | null;
  mozFullScreenElement?: Element | null;
  msFullscreenElement?: Element | null;
}

// Definición de tipos para elementos con funciones de pantalla completa
interface FullscreenElement extends Element {
  webkitRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

function UnityGame({ buildVersion }: { buildVersion: 'pc' | 'touch' }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [showMaximizeHint, setShowMaximizeHint] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const gameInstanceRef = useRef<any>(null);

  useEffect(() => {
    const doc = document as FullscreenDocument;
    const handleFullscreenChange = () => {
      setIsFullscreen(!!(doc.fullscreenElement || doc.webkitFullscreenElement || 
                        doc.mozFullScreenElement || doc.msFullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
      if (mobile) {
        setIsPortrait(window.innerHeight > window.innerWidth);
      }
    };

    const handleOrientation = () => {
      if (isMobile) {
        setIsPortrait(window.innerHeight > window.innerWidth);
      }
    };

    checkDevice();
    window.addEventListener('resize', handleOrientation);
    return () => window.removeEventListener('resize', handleOrientation);
  }, [isMobile]);

  const requestFullscreenForElement = async (element: FullscreenElement): Promise<boolean> => {
    if (element.requestFullscreen) {
      await element.requestFullscreen();
      return true;
    } else if (element.webkitRequestFullscreen) {
      await element.webkitRequestFullscreen();
      return true;
    } else if (element.mozRequestFullScreen) {
      await element.mozRequestFullScreen();
      return true;
    } else if (element.msRequestFullscreen) {
      await element.msRequestFullscreen();
      return true;
    }
    return false;
  };

  const exitFullscreen = async (): Promise<boolean> => {
    const doc = document as FullscreenDocument;
    
    if (doc.exitFullscreen) {
      await doc.exitFullscreen();
      return true;
    } else if (doc.webkitExitFullscreen) {
      await doc.webkitExitFullscreen();
      return true;
    } else if (doc.mozCancelFullScreen) {
      await doc.mozCancelFullScreen();
      return true;
    } else if (doc.msExitFullscreen) {
      await doc.msExitFullscreen();
      return true;
    }
    return false;
  };

  const toggleFullscreen = async () => {
    const doc = document as FullscreenDocument;
    try {
      if (!doc.fullscreenElement && !doc.webkitFullscreenElement && 
          !doc.mozFullScreenElement && !doc.msFullscreenElement) {
        if (containerRef.current) {
          const success = await requestFullscreenForElement(containerRef.current);
          if (!success && isMobile) {
            setIsFullscreen(true);
          }
        }
      } else {
        const success = await exitFullscreen();
        if (!success && isMobile) {
          setIsFullscreen(false);
        }
      }
    } catch (err) {
      console.error('Error al cambiar modo pantalla completa:', err);
      if (isMobile) {
        setIsFullscreen(!isFullscreen);
      }
    }
  };

  useEffect(() => {
    let unityInstance: any = null;

    const loadUnity = async () => {
      if (!containerRef.current) return;

      try {
        containerRef.current.innerHTML = '';
        const canvas = document.createElement('canvas');
        canvas.id = 'unity-canvas';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        containerRef.current.appendChild(canvas);

        const script = document.createElement('script');
        script.src = buildVersion === 'pc' 
          ? '/Build/WebGL Builds.loader.js'
          : '/Build/WebGL Builds Touch.loader.js';
        
        script.onload = async () => {
          if (!window.createUnityInstance) {
            setError('Error: createUnityInstance no está disponible');
            return;
          }

          try {
            const config = {
              dataUrl: buildVersion === 'pc'
                ? "/Build/WebGL Builds.data.br"
                : "/Build/WebGL Builds Touch.data.br",
              frameworkUrl: buildVersion === 'pc'
                ? "/Build/WebGL Builds.framework.js.br"
                : "/Build/WebGL Builds Touch.framework.js.br",
              codeUrl: buildVersion === 'pc'
                ? "/Build/WebGL Builds.wasm.br"
                : "/Build/WebGL Builds Touch.wasm.br",
              streamingAssetsUrl: "StreamingAssets",
              companyName: "Saritu.eth",
              productName: buildVersion === 'pc' ? "Turbo racing" : "Turbo racing Touch DEMO",
              productVersion: "1",
            };

            unityInstance = await window.createUnityInstance(canvas, config, (progress) => {
              const progressBar = document.querySelector("#unity-progress-bar-full");
              if (progressBar instanceof HTMLElement) {
                progressBar.style.width = `${Math.round(progress * 100)}%`;
              }
            });

            gameInstanceRef.current = unityInstance;
            setIsLoading(false);
            const loadingBar = document.querySelector("#unity-loading-bar");
            if (loadingBar instanceof HTMLElement) {
              loadingBar.style.display = "none";
            }
          } catch (err) {
            console.error('Error al inicializar Unity:', err);
            setError('Error al inicializar el juego');
            setIsLoading(false);
          }
        };

        script.onerror = () => {
          setError('Error al cargar el script de Unity');
          setIsLoading(false);
        };

        document.body.appendChild(script);
      } catch (err) {
        console.error('Error:', err);
        setError('Error al inicializar el juego');
        setIsLoading(false);
      }
    };

    loadUnity();

    return () => {
      if (gameInstanceRef.current && typeof gameInstanceRef.current.Quit === 'function') {
        try {
          gameInstanceRef.current.Quit();
        } catch (err) {
          console.error('Error al cerrar Unity:', err);
        }
      }

      const unityScript = document.querySelector('script[src*="loader.js"]');
      if (unityScript && unityScript.parentNode) {
        unityScript.parentNode.removeChild(unityScript);
      }

      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [buildVersion]);

  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[500px]">
      {buildVersion === 'touch' && (
        <div className="absolute top-4 left-4 z-[2001] bg-yellow-500 text-white px-3 py-1 rounded-full font-bold">
          DEMO
        </div>
      )}
      
      <div 
        id="unity-container"
        ref={containerRef}
        className={`
          w-full h-full bg-black relative
          ${isFullscreen ? 'fixed inset-0 z-40 h-screen w-screen' : ''}
          ${isMobile && isFullscreen ? 'touch-none' : ''}
        `}
        style={{
          ...(isMobile && isFullscreen ? {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 2000,
            backgroundColor: 'black',
          } : {})
        }}
      />

      {!isFullscreen && showMaximizeHint && (
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-30"
        >
          <div 
            className="absolute top-2 right-2"
            onClick={(e) => {
              e.stopPropagation();
              setShowMaximizeHint(false);
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div 
            className="text-center p-4 rounded-lg cursor-pointer"
            onClick={toggleFullscreen}
          >
            <Maximize2 className="h-12 w-12 text-white mx-auto mb-2" />
            <p className="text-white text-lg font-semibold">
              Haz clic para jugar en pantalla completa
            </p>
          </div>
        </div>
      )}
      
      <div className={`${isFullscreen ? 'fixed top-4 right-4 z-[2001]' : 'absolute top-4 right-4 z-20'}`}>
        <Button
          onClick={toggleFullscreen}
          className="bg-gray-800/70 hover:bg-gray-700"
          size="icon"
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
      </div>

      {isMobile && isPortrait && (
        <div className={`${isFullscreen ? 'fixed' : 'absolute'} top-0 left-0 right-0 bg-yellow-600 text-white p-2 text-center z-[2002] flex items-center justify-center`}>
          <Smartphone className="mr-2 h-4 w-4" />
          Rota tu dispositivo horizontalmente para una mejor experiencia
        </div>
      )}

      {isLoading && (
        <div 
          id="unity-loading-bar" 
          className={`${isFullscreen ? 'fixed' : 'absolute'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 z-[2001] bg-gray-900 p-4 rounded-lg shadow-lg`}
        >
          <div className="text-white text-center mb-4">Cargando juego...</div>
          <div id="unity-progress-bar-empty" className="w-full h-4 bg-gray-700 rounded">
            <div 
              id="unity-progress-bar-full" 
              className="h-full bg-green-500 rounded w-0 transition-all duration-200"
            />
          </div>
        </div>
      )}
      {error && (
        <div className={`${isFullscreen ? 'fixed' : 'absolute'} inset-0 flex items-center justify-center z-[2001]`}>
          <div className="bg-red-500 text-white p-4 rounded-lg">
            {error}
          </div>
        </div>
      )}
    </div>
  );
}

export function GameTrack() {
  const [selectedVersion, setSelectedVersion] = useState<'pc' | 'touch'>('pc');
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.display = 'none';
    }

    return () => {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.style.display = '';
      }
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="h-full flex flex-col bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
        <div className="flex gap-4 mb-4">
          <Button
            variant={selectedVersion === 'pc' ? 'default' : 'outline'}
            className="flex-1"
            onClick={() => {
              setSelectedVersion('pc');
              setGameStarted(false);
            }}
            disabled={gameStarted}
          >
            <Monitor className="mr-2 h-4 w-4" />
            PC Version
          </Button>
          <Button
            variant={selectedVersion === 'touch' ? 'default' : 'outline'}
            className="flex-1"
            onClick={() => {
              setSelectedVersion('touch');
              setGameStarted(false);
            }}
            disabled={gameStarted}
          >
            <Tablet className="mr-2 h-4 w-4" />
            Touch Version
          </Button>
        </div>

        <div className="relative flex-1 bg-gray-800 rounded-lg overflow-hidden">
          {gameStarted ? (
            <UnityGame buildVersion={selectedVersion} />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {selectedVersion === 'pc' ? 'PC Version' : 'Touch Version (DEMO)'}
                </h3>
                <p className="text-gray-400 mb-4">
                  {selectedVersion === 'pc' 
                    ? 'Optimized for keyboard and mouse play' 
                    : 'Optimized for touch devices'}
                </p>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => setGameStarted(true)}
                >
                  Start Game
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {gameStarted && (
          <Button 
            size="lg" 
            variant="destructive"
            className="w-full font-bold py-6 text-lg mt-4"
            onClick={() => setGameStarted(false)}
          >
            Stop and Change Version
          </Button>
        )}
      </div>
    </ErrorBoundary>
  );
}