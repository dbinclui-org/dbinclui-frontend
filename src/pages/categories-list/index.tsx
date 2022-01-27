import React from 'react';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import AccessibilityTypography from '@components/AccessibilityTypography';
import styles from './styles';
import { Box, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { CreateSharp } from '@mui/icons-material';

export interface CategoriesListProps {}

export const CategoriesList: React.FC<
  CategoriesListProps
> = (): JSX.Element => {
  const columns: GridColDef[] = [
    {
      field: 'guide',
      width: 300,
      editable: false,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{'Guia'}</strong>
      ),
    },
    {
      field: 'title',
      width: 200,
      editable: false,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{'Categoria'}</strong>
      ),
    },
    {
      field: 'shortDescription',
      width: 250,
      editable: false,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{'Descrição'}</strong>
      ),
    },
    {
      field: 'edit',
      width: 100,
      sortable: false,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{'Editar'}</strong>
      ),
      renderCell: (params) => (
        <Button
          href={params.value}
          startIcon={<CreateSharp />}
          sx={{ color: 'text.primary' }}
        ></Button>
      ),
    },
    {
      field: 'delete',
      width: 100,
      sortable: false,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{'Excluir'}</strong>
      ),
      renderCell: (params) => (
        <Button
          href={params.value}
          startIcon={<DeleteIcon />}
          sx={{ color: 'text.primary' }}
        ></Button>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 1',
      shortDescription: 'Descrição da categoria',
      edit: 'admin/excluir-categoria?id=1',
      delete: 'admin/atualizar-categoria?id=1',
    },
    {
      id: 2,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 2',
      shortDescription: 'Descrição da categoria',
    },
    {
      id: 3,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 3',
      shortDescription: 'Descrição da categoria',
    },
    {
      id: 4,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 4',
      shortDescription: 'Descrição da categoria',
    },
    {
      id: 5,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 5',
      shortDescription: 'Descrição da categoria',
    },
    {
      id: 6,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 6',
      shortDescription: 'Descrição da categoria',
    },
    {
      id: 7,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 7',
      shortDescription: 'Descrição da categoria',
    },
    {
      id: 8,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 8',
      shortDescription: 'Descrição da categoria',
    },
    {
      id: 9,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 9',
      shortDescription: 'Descrição da categoria',
    },
    {
      id: 10,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 10',
      shortDescription: 'Descrição da categoria',
    },
    {
      id: 11,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 11',
      shortDescription: 'Descrição da categoria',
    },
    {
      id: 12,
      guide: 'Guia de Acessibilidade',
      title: 'Categoria 12',
      shortDescription: 'Descrição da categoria',
    },
  ];

  return (
    <>
      <AccessibilityTypography sx={styles.listTitle}>
        LISTAGEM DE CATEGORIAS
      </AccessibilityTypography>
      <Box style={{ width: '100%' }}>
        <DataGrid
          data-testid="dataGrid"
          autoHeight
          disableExtendRowFullWidth={true}
          rows={rows}
          columns={columns}
          sx={styles.table}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </Box>
      <Box sx={styles.boxButton}>
        <Button
          component={Link}
          to="/admin/cadastrar-categoria"
          sx={styles.button}
          variant="contained"
          type="submit"
          role="button"
          data-testid="new"
        >
          Novo
        </Button>

        <Button
          component={Link}
          to="/admin"
          sx={styles.button}
          variant="contained"
          type="reset"
          role="button"
          data-testid="back"
        >
          Voltar
        </Button>
      </Box>
    </>
  );
};

export default CategoriesList;