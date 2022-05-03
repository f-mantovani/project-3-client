import { useMutation, useQueryClient } from "react-query";

const useAsyncMutation = (apiCall, queryName) => {

  const { mutateAsync } = useMutation(apiCall)
  const queryClient = useQueryClient()
  
  const asyncMutation = async (payload) => {
    try {
      await mutateAsync(payload)
      queryClient.invalidateQueries(queryName)
    } catch (error) {
      throw error
    }

  }

  return asyncMutation

}

export default useAsyncMutation