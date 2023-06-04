import { useRouter, usePathname } from "next/navigation";
import { FC } from 'react';

import { IApplicant } from '@/common/components/models/applicants.model';
import { calculateAge } from '@/common/components/utils/function';
import { useMutation, gql } from '@apollo/client';
import './styles.css'
import { FavoriteFlagIcon } from "@/common/icons/FavoriteFlagIcon";

const createMutation = (type: string) => {
    return gql`
    mutation ($id: ID!) {
      ${type} (id: $id)
    }
  `
}

export const Card: FC<IApplicant & { refetch: () => void }> = ({
    refetch, id, firstName, country, profilePicture, visa,
    is_favorite, is_scheduled_for_interview, dateOfBirth,
    specialization }) => {

    const router = useRouter();
    const currentUrl = usePathname();

    const [addFavorite, { loading: mutationLoading }] =
        useMutation(createMutation(is_favorite ? 'deleteApplicantFromFavourites' : 'addApplicantToFavourites'));

    const [addInterview, { loading: interviewLoading }] =
        useMutation(createMutation(is_scheduled_for_interview ? 'deleteApplicantFromScheduledForInterview' :
            'addApplicantToInterviews'));

    const updateFavorite = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (mutationLoading) {
            return;
        }
        e.stopPropagation();
        e.preventDefault()
        try {
            const response = await addFavorite({
                variables: { id }
            })
            if (response) {
                refetch()
            }
        } catch (error) {
            console.log(error);
        }
    }

    const updateInterview = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (interviewLoading) {
            return;
        }
        e.stopPropagation();
        e.preventDefault()
        try {
            const response = await addInterview({
                variables: { id }

            })
            if (response) {
                refetch()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="card rounded cursor-pointer relative" onClick={() => router.push(currentUrl + '/' + id)}>
        <div className='flex info-container'>
            <div>
                <img src={profilePicture ? profilePicture?.path : '/Avatar-Image.png'}
                    width={205}
                    height={205}
                    className='rounded' alt='person'></img>
            </div>
            <div className='mt-9'>
                <div>
                    <div className="font-bold text-base info-title">Nationality:</div>
                    <div>{country}</div>
                </div>
                <div>
                    <div className="font-bold text-base info-title">Visa:</div>
                    <div>{visa}</div>
                </div>
                <div>
                    <div className="font-bold text-base info-title">Age:</div>
                    <div>{calculateAge(dateOfBirth)}</div>
                </div>
            </div>
        </div>
        <div>
            <div className='person-name font-extrabold text-xl ml-6 uppercase'>{firstName}</div>
            <div className='text-base ml-6 mb-5'>{
                specialization?.map((item, index) => <span key={index} className='capitalize'>
                    {item.toLocaleLowerCase()}
                </span>)
            }</div>
        </div>

        {
            is_scheduled_for_interview ? <div className='p-4 bordered-top font-semibold text-purple-primary interview-status'>
                Status
            </div> : <div>
                <div className='p-4 bordered-top'>
                    Experience
                </div>
                <div className='p-4 bordered-top'>
                    Programming languages
                </div>
            </div>
        }

        <div className={`p-4 bordered-top font-bold cursor-pointer ${is_favorite ? '' : 'colored'}`}
            onClick={updateFavorite}>
            {is_favorite ? '- Remove from Favorites' : '+ Add to Favorites'}
        </div>

        <div className={`p-4 bordered-top font-bold cursor-pointer ${is_scheduled_for_interview ? '' : 'colored'}`}
            onClick={updateInterview}>
            {is_scheduled_for_interview ? '- Remove from Interview' : '+ Invite for Interview'}
        </div>
        {is_favorite && <div className="absolute -top-1 right-3"><FavoriteFlagIcon /></div>}
    </div>
}