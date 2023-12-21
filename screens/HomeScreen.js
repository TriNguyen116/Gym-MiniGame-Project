import { StyleSheet, Text, View, SafeAreaView, Image,ScrollView,Pressable } from "react-native";
import React ,{useContext} from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
  const navigation = useNavigation();

  const {
    completed,

    minutes,
  
    calories,

    workout,
    
    setCompleted,
    setMinutes,
    setCalories,
    setWorkout,

  } = useContext(FitnessItems);

  return (
    <ScrollView style={{marginTop:40}}>
      <View
        style={{
          backgroundColor: "#CD853F",
          padding: 10,
          height: 200,
          width: "100%",
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',gap:70 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap:5 }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          HOME WORKOUT
        </Text>
        <Pressable
        onPress={() => {
          // navigation.navigate("Rest");
          setCompleted([]);
          setWorkout(0);
          setMinutes(0);
          setCalories( 0);
        }}
        style={{
          backgroundColor: "green",
          padding: 5,
          width:60,
          borderRadius:20,
          
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          RESET
        </Text>
      </Pressable>
      </View>
      <Pressable
        onPress={() => navigation.navigate("MiniGame")}
        style={{
          backgroundColor: "orange",
          padding: 5,
          width:100,
          borderRadius:20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          Mini Game
        </Text>
      </Pressable>
      </View>
      
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {workout}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {calories}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              KCAL
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {minutes}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              MINS
            </Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
        <FitnessCards/>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
