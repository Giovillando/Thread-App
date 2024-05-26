import styled from "styled-components";
import { FaUserCircle, FaComment } from "react-icons/fa";

export const ThreadDetailWrapper = styled.div`
  padding: 16px;
  margin-bottom: 16px;
`;

export const ThreadDetailContent = styled.div`
  margin-bottom: 16px;
`;

export const Category = styled.p`
  font-size: 16px;
  color: #666;
`;

export const Title = styled.h3`
  font-weight: bold;
  color: #333;
`;

export const Body = styled.div`
  color: #333;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const UserIcon = styled(FaUserCircle)`
  margin-right: 4px;
`;

export const CreatedAt = styled.span`
  color: #999;
`;

export const ThreadInputWrapper = styled.div`
  padding: 16px;
  margin-top: 8px;
  margin-bottom: 40px;
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

export const Textarea = styled.textarea`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #1976d2;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 0.25rem;
  &:hover {
    background-color: #145a9e;
  }
`;

export const ThreadItemWrapper = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const UserPhoto = styled.div`
  margin-right: 16px; /* Tambahkan margin kanan */
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const ThreadsListWrapper = styled.div`
  /* Your styles for ThreadsListWrapper here */
`;

export const ThreadDetail = styled.div`
  margin-bottom: 16px;
`;

export const ThreadCreatedAt = styled.span`
  color: #999;
`;

export const ThreadUserName = styled.span`
  display: flex; /* Tambahkan flex untuk mengatur tata letak */
  align-items: center; /* Mengatur tata letak secara vertikal */
  font-weight: bold;
  color: #333;
  margin-bottom: 8px; /* Tambahkan margin bawah */
`;

export const ThreadCategory = styled.p`
  font-size: 16px;
  color: #666;
`;

export const ThreadTitle = styled.h3`
  font-weight: bold;
  color: #333;
`;

export const ThreadBody = styled.div`
  color: #333;
`;

export const ThreadLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CommentIcon = styled(FaComment)`
  margin-left: 8px;
`;
export const CommentItemWrapper = styled.div`
  margin-bottom: 16px;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const CommentOwner = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentTime = styled.div`
  color: #000;
  margin-left: auto;
`;

export const CommentText = styled.div`
  margin-top: 1rem;
  font-weight: 500;
  color: #000;
`;

export const CommentActions = styled.div`
  margin-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
export const StyledUserCircle = styled(FaUserCircle)`
  width: 24px;
  height: 24px;
  color: #6c757d;
`;
