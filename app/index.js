import { StyleSheet, Image, View, Text, ActivityIndicator } from "react-native";
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { useState, useEffect } from "react";
import axios from "axios";


export default function Index() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://run.mocky.io/v3/63e8808b-eea2-4967-95a0-ab036d390b66');
        setPets(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const petItems = pets.map((pet, index) => ({
    label: pet.name,
    value: index,
  }));

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load pets data: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoShadow}>
          <Image source={require('../assets/Tailz Logo Final_edited.webp')}style={styles.logo}/>
        </View>
        <Text style={styles.text}>Pet Viewer</Text>
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.shadowContainer}>
          <Image 
            source={require('../assets/pets.jpg')} 
            style={styles.image} 
          />
        </View>
      </View>

      <View style={{marginTop: 30, marginHorizontal: 60}}>
        <Text style={styles.label}>Select a pet:</Text>
        <View style={styles.dropDown}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedPet(pets[value])}
            items={petItems}
            style={pickerSelectStyles}
            placeholder={{ label: "Select a pet...", value: null }}
          />
        </View>
        {selectedPet && (
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Pet Details</Text>
            <Text style={styles.detail}>Name: {selectedPet.name}</Text>
            <Text style={styles.detail}>Type: {selectedPet.animal_type}</Text>
            <Text style={styles.detail}>Breed: {selectedPet.breed}</Text>
            <Text style={styles.detail}>Weight: {selectedPet.weight}</Text>
            <Text style={styles.detail}>Color: {selectedPet.color}</Text>
          </View>
        )}
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#E2DFD0',
  },
  header:{
    display: "flex",
    flexDirection: 'row',
    marginTop: 18,
    marginBottom: 20,
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 30,
    marginRight: 10,
  },
  logoShadow:{
    shadowColor: '#524C42',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 50,
    elevation: 50,
    borderRadius: 50,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    marginRight: 5,
    marginTop: 30,
    color: '#524C42',
  },
  shadowContainer: {
    shadowColor: '#524C42',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 23,
    borderRadius: 10, 
    marginTop: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 25,
    borderColor: '#ccc',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedValue: {
    marginTop: 20,
    fontSize: 16,
  },
detailsContainer: {
  marginTop: 20,
  padding: 10,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  backgroundColor: '#f9f9f9',
  width: '100%',
},
detailsTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10,
},
detail: {
  fontSize: 16,
  marginBottom: 5,
},
loaderContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
errorContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
errorText: {
  color: 'red',
  fontSize: 18,
},
dropDown: {
  backgroundColor: '#524C42',
  borderRadius: 10,
  color: "#E2DFD0"
},
})



const pickerSelectStyles = {
  inputIOS: {
    color: '#E2DFD0',
  },
  inputAndroid: {
    color: '#E2DFD0',
  },
};
