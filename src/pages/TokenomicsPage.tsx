import { motion } from 'framer-motion';

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tokenómica y Diseño de Ecosistema
          </h1>
          <p className="text-xl text-gray-400">
            Juego de Carreras Espaciales Crypto
          </p>
        </motion.div>

        {/* Visión General */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Visión General</h2>
          <p className="text-gray-300 leading-relaxed">
            La propuesta busca crear un ecosistema económico sólido y sostenible para un juego de carreras
            espaciales que integra tecnología blockchain, NFTs y una economía dual de tokens. Se introducen un
            token principal ($NEBULA) y un token utilitario ($FUEL), junto con NFTs de naves (ERC-1155) y
            componentes intercambiables. El objetivo es incentivar la participación activa de los jugadores, la
            mejora y personalización de sus activos, la competencia constante, y asegurar ingresos y valorización
            sostenida para el equipo de desarrollo.
          </p>
        </motion.section>

        {/* Elementos del Ecosistema */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Elementos del Ecosistema</h2>
          
          {/* Naves NFT */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Naves NFT (ERC-1155)</h3>
            
            <div className="space-y-6">
              {/* Series Limitadas */}
              <div className="bg-gray-700/50 rounded-lg p-6">
                <h4 className="text-xl font-medium text-white mb-3">Series Limitadas</h4>
                <p className="text-gray-300 mb-4">
                  Cada tipo de nave se lanza en una serie limitada para fomentar la rareza y el valor.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                    Colección Aurora: 1,000 unidades
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
                    Colección Valkyria: 500 unidades
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                    Colección Orion: 250 unidades
                  </li>
                </ul>
              </div>

              {/* Slots de Componentes */}
              <div className="bg-gray-700/50 rounded-lg p-6">
                <h4 className="text-xl font-medium text-white mb-3">Slots de Componentes</h4>
                <p className="text-gray-300">
                  Cada nave posee espacios específicos para componentes (motor, conductor, aerodinámica,
                  armadura), que son también NFTs individuales. Estos componentes determinan las estadísticas
                  y el rendimiento de la nave en las carreras.
                </p>
              </div>

              {/* Riqueza Funcional y Estética */}
              <div className="bg-gray-700/50 rounded-lg p-6">
                <h4 className="text-xl font-medium text-white mb-3">Riqueza Funcional y Estética</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Las naves y sus componentes permiten una personalización profunda, facilitando la
                    optimización de estadísticas para diferentes tipos de circuitos y estilos de juego.</li>
                  <li>• La estética de cada nave puede variar según los componentes instalados, ofreciendo una
                    experiencia visual única y personalizada.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Componentes NFT y Fusión con IA */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Componentes NFT y Fusión con IA</h3>
            
            <div className="space-y-6">
              {/* Componentes Intercambiables */}
              <div className="bg-gray-700/50 rounded-lg p-6">
                <h4 className="text-xl font-medium text-white mb-3">Tipos de Componentes</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Motor (NFT): Determina la aceleración y velocidad máxima.</li>
                  <li>• Conductor (NFT): Aporta habilidades especiales, como mejor agarre en curvas o menor
                    consumo de $FUEL.</li>
                  <li>• Alerones/Aerodinámica (NFT): Afectan la maniobrabilidad y estabilidad.</li>
                  <li>• Armadura (NFT): Proporciona mayor resistencia al daño.</li>
                </ul>
              </div>

              {/* Funcionalidades */}
              <div className="bg-gray-700/50 rounded-lg p-6">
                <h4 className="text-xl font-medium text-white mb-3">Funcionalidades</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Intercambio entre Naves: Los componentes pueden desmontarse de una nave e
                    instalarse en otra compatible.</li>
                  <li>• Compra y Venta: Existe un mercado secundario activo donde los jugadores pueden
                    comerciar sus componentes, buscando obtener piezas más raras o valiosas.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 