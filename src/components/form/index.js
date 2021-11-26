import React,{useState} from "react";
import { TextInput,Text,View, Button} from "react-native";
import ResultImc from "./resultImc";
import styles from "./style";

export default function Form() {

    const [height, setHeight]= useState(null);
    const [weight, setWeight]= useState(null);
    const [messageImc, setMessageImc]= useState("preencha o peso e altura");
    const [imc, setImc]= useState(null);
    const [textButton, setTextButton]= useState("Calcular");

    function calculateImc(){
        return setImc((weight/(height*height)).toFixed(2));
    }

    function validationImc(){
        if (weight != null && height != null){
            calculateImc()
            setWeight(null);
            setHeight(null);
            setMessageImc("Seu imc é igual: ");
            setTextButton("Calcular Novamente");
            return;
        }

        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }
    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                keyboardType="numeric" 
                placeholder="Altura"/>

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                keyboardType="numeric" 
                placeholder="Peso"/>  

                <Button 
                color="#ff0043"
                title={textButton}
                onPress={()=> validationImc()} 
                />
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}