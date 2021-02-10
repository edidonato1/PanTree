Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  put '/pantries/:pantry_id/groceries/:id', to: 'pantries#add_grocery'
  patch '/pantries/:pantry_id/groceries/:id', to: 'pantries#remove_grocery'

  # put '/lists/:list_id/groceries/:id', to: 'lists#add_grocery'
  put '/lists/:list_id/groceries', to: 'lists#add_grocery'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users do
    resources :pantries
    resources :foods
    resources :lists
  end

  resources :pantries

  resources :foods 

  resources :groceries

  resources :lists

end
