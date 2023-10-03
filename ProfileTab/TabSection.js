import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Comments from './Comments';

const TabBar = ({ tabs, activeTab, onTabPress }) => {
  return (
    <View style={[styles.container, styles.tabBar]}>
      {tabs.map((tab, index) => {
        const isActive = index === activeTab;
        return (
          <TouchableOpacity
            key={tab.label}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => onTabPress(index)}
          >
            <Text style={[styles.tabLabel, isActive && styles.activeLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Commentarios' },
    { label: 'Acerca de mí' },
  ];

  const handleTabPress = (index) => {
    setActiveTab(index);
  };

  const Descripcion = () => (
    <View style={{
      width: '90%',
      marginHorizontal: 20,
    }}>
      <Text>
      Soy un apasionado de la cocina y un gran fanático de la aplicación de recetas. Me encanta experimentar en la cocina y probar nuevas recetas cada semana. Gracias a esta increíble aplicación, he descubierto una gran variedad de platos que nunca antes había probado y he aprendido nuevas técnicas de cocina que me han ayudado a mejorar mis habilidades culinarias.
    </Text>
    </View>
    
  )

  return (
    <View style={styles.container}>
      <TabBar tabs={tabs} activeTab={activeTab} onTabPress={handleTabPress} />
      <View style={styles.content}>
        {activeTab === 0 && <Comments/>}
        {activeTab === 1 && <Descripcion/>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#fff',
    width: '100%'
  },
  tabBar: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 50,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  activeTab: {
    borderBottomColor: '#2196f3',
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  activeLabel: {
    color: '#2196f3',
  },
  content: {
    flex: 1,
    marginTop: 50, // Agregar margen superior igual a la altura de la barra de tabs
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TabSection;
