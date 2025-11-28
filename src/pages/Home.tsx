import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ListaEquipamentos from "../components/equip";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Equipamentos Uninorte</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ padding: "16px" }}>
          <h2>Gerenciamento de Equipamentos</h2>
          <p>
            Abaixo está a lista de equipamentos da Uninorte. Você pode remover
            itens da lista para simular a gestão de ativos.
          </p>

          <ListaEquipamentos />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
