import React, { useState } from "react";
import styled from "styled-components";
import { useProductContext } from "../contexts/ProductContext";

interface RefSearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalWrapper = styled.div`
  width: 300px;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  background-color: #8da0a9;
  color: white;
  padding: 12px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 12px;
  top: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 0.95rem;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #8da0a9;
  color: white;
  padding: 10px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6f8993;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.85rem;
  margin-top: 10px;
  text-align: center;
`;

export const RefSearchModal: React.FC<RefSearchModalProps> = ({
    isOpen,
    onClose,
}) => {
    const { products, selectProduct } = useProductContext();
    const [ref, setRef] = useState("");
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleSearch = () => {
        const found = products.find(
            (p) => p.reference.trim() === ref.trim()
        );

        if (found) {
            selectProduct(found);
            setError("");
            setRef("");
            onClose();
        } else {
            setError("Referência não encontrada.");
        }
    };

    return (
        <Overlay>
            <ModalWrapper>
                <Header>
                    Buscar por Referência
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                </Header>
                <Content>
                    <Label>Digite a referência:</Label>
                    <Input
                        value={ref}
                        onChange={(e) => setRef(e.target.value)}
                        placeholder="Ex: 20.09.0000"
                    />
                    <Button onClick={handleSearch}>Pesquisar</Button>
                    {error && <ErrorText>{error}</ErrorText>}
                </Content>
            </ModalWrapper>
        </Overlay>
    );
};
