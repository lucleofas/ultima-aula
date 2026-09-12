export async function getAlunos (){
    const url = 'https://lion-school-phbo.onrender.com/alunos?curso_id=1'
    const response = await fetch(url)
    const data =  await response.json()
    return data
}