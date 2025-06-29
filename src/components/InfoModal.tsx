import React from "react";
import styled from "styled-components";
import type Product from "../models/Product";
import { FaX } from "react-icons/fa6";
import Icon from "./elements/icon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
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
  width: 320px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
`;

const Header = styled.header`
  background: var(--primary-color);
  color: white;
  padding: 12px 0;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
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
  font-weight: 700;
  line-height: 1;
`;

const Content = styled.div`
  padding: 16px 24px 24px 24px;
  color: #222;
  font-size: 14px;
`;

const Title = styled.div`
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
  font-size: 0.95rem;
`;

const Field = styled.div`
  margin-bottom: 10px;
  line-height: 1.3;
  
  b {
  font-weight: 700;
  }
`;

export const InfoModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose} aria-label="Fechar modal">
      <ModalWrapper onClick={() => {}}>
        <Header>
          Informações
          <CloseButton onClick={onClose} aria-label="Fechar modal">
            <Icon>
              <FaX />

            </Icon>
          </CloseButton>
        </Header>
        <Content>
          <Title>Detalhes do Produto</Title>
          <Field>
            <b>ID:</b> {product.id}
          </Field>
          <Field>
            <b>Nome:</b> {product.name}
          </Field>
          <Field>
            <b>Referência:</b> {product.reference}
          </Field>
          <Field>
            <b>Tipo:</b> {product.type}
          </Field>
          <Field>
            <b>Gênero:</b> {product.gender}
          </Field>
          <Field>
            <b>Entrega Rápida:</b> {product.promptDelivery ? "Sim" : "Não"}
          </Field>
          <Field>
            <b>Descrição:</b> {product.description || "-"}
          </Field>
          <Field>
            <b>Categorias:</b> {product.categories}
          </Field>
          <Field>
            <b>Subcategorias:</b> {product.subcategories || "-"}
          </Field>
          <Field>
            <b>Hex Code:</b> {product.hexCode || "-"}
          </Field>
          <Field>
            <b>SKUs:</b> {product.skus?.length}
          </Field>
          <Field>
            <b>Imagens:</b> {product.images?.length}
          </Field>
        </Content>
      </ModalWrapper>
    </Overlay>
  );
};
