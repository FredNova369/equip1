import React, { useState } from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonBadge,
} from "@ionic/react";

type Equipamento = {
  id: number;
  nome: string;
  sala: string;
  status: "ativo" | "manutencao";
};

const ListaEquipamentos: React.FC = () => {
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([
    { id: 1, nome: "Projetor Epson", sala: "Sala 101", status: "ativo" },
    { id: 2, nome: "Notebook Dell", sala: "Lab 01", status: "manutencao" },
    { id: 3, nome: "Caixa de Som JBL", sala: "Auditório", status: "ativo" },
    { id: 4, nome: "TV Samsung 55\"", sala: "Sala 202", status: "ativo" },
  ]);

  function removerEquipamento(index: number) {
    
    const novaLista = equipamentos.slice(); 
    novaLista.splice(index, 1);            
    setEquipamentos(novaLista);             
  }

  return (
    <IonList>
      {equipamentos.map((equip, index) => (
        <IonItem key={equip.id}>
          <IonLabel>
            <h2>{equip.nome}</h2>
            <p>{equip.sala}</p>
          </IonLabel>

          <IonBadge
            color={equip.status === "ativo" ? "success" : "warning"}
            style={{ marginRight: "8px" }}
          >
            {equip.status === "ativo" ? "Ativo" : "Em manutenção"}
          </IonBadge>

          <IonButton
            color="danger"
            size="small"
            onClick={() => removerEquipamento(index)}
          >
            Remover
          </IonButton>
        </IonItem>
      ))}

      {equipamentos.length === 0 && (
        <IonItem>
          <IonLabel>
            <p>Nenhum equipamento cadastrado.</p>
          </IonLabel>
        </IonItem>
      )}
    </IonList>
  );
};

export default ListaEquipamentos;

