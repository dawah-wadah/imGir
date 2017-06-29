Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :posts do
      resources :comments, only: %i[index]
    end
    resources :votes, only: [:create, :edit, :destroy]
    resources :comments, only: %i[create edit destroy]
    resources :images
    resources :users, only: %i[create show] do
      resources :comments, only: [:index]
    end
    resource :session, only: %i[create destroy show]
  end

  root 'static_pages#root'
end
