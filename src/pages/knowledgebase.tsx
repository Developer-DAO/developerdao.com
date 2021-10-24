import React, { useCallback, useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
  chakra,
  Input,
  Text,
  Button,
  VStack,
  useToast,
  Box,
  Wrap,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import Logo from '../components/Logo';
import PageLayout from '../layout/Page';
import Airtable from 'airtable';
import KnowledgeCard from '../components/KnowledgeCard';

function KnowledgeBase(props: { airtable: Airtable }) {
  const { t } = useTranslation();
  const [airbase, setAirbase] = useState('Resources');
  const [airtable, setAirtable] = useState<Airtable>();
  const [recordList, setRecordList] = useState<any[]>([]);
  const toast = useToast();

  let baseFunctor;

  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_AIRTABLE_KEY &&
      process.env.NEXT_PUBLIC_AIRTABLE_BASE
    ) {
      setAirtable(
        new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_KEY }),
      );
      if (process.env.NEXT_PUBLIC_AIRTABLE_BASE) {
        setAirbase(process.env.NEXT_PUBLIC_AIRTABLE_BASE);
      }
      listQuery();
    } else {
      // give some kind of failure-to-launch
      console.error('airtable configuration failed');
      toast({
        title: t('airtableError'),
        isClosable: true,
      });
    }
  }, []);

  const listQuery = () => {
    setRecordList([]);
    if (!airtable) return;
    const resourceFunctor = airtable.base(airbase);

    resourceFunctor('Resources')
      .select({})
      .eachPage(
        (records, fetchNextPage) => {
          setRecordList(
            recordList.concat(records.map((item) => item._rawJson)),
          );
          fetchNextPage();
        },
        (err) => {
          if (err) console.error('error', err);
        },
      );
  };

  return (
    <PageLayout>
      <chakra.main>
        <Box mx="auto" maxW="6xl" py={3} px={4}>
          This is the KB location
        </Box>
        <Button onClick={listQuery}>Click Me</Button>
        <Box>
          {recordList.length === 0 ? (
            <Text>No Records</Text>
          ) : (
            <Wrap>
              {recordList.map((item, index) => (
                <KnowledgeCard key={index} data={item} />
              ))}
            </Wrap>
          )}
        </Box>
      </chakra.main>
    </PageLayout>
  );
}

export default KnowledgeBase;
